import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
  geocodeByLatLng,
} from 'react-google-places-autocomplete';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import axios from 'axios';
import { Option } from 'react-google-places-autocomplete/build/types';
import { SingleValue } from 'react-select';
import * as S from './ListingForm.styled';

const { VITE_APP_GOOGLE_MAPS_KEY } = process.env;

export default function ListingForm() {
  const { register, handleSubmit, setValue, control } = useForm();

  const [lat, setLat] = useState<string | null>(null);

  const [lon, setLon] = useState<string | null>(null);

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    if (lat && lon) {
      formData.append('name', data.name);
      formData.append('description', data.description);
      formData.append('price', data.price);
      formData.append('address', data.address.label);
      formData.append('lat', lat);
      formData.append('lon', lon);
      const imageFile = new File([data.image[0]], data.image[0].name, { type: data.image[0].type });
      formData.append('image', imageFile);
      const response = await axios.post(
        'https://listings-app-backend.onrender.com/listings',
        formData,
      );

      console.log(response);
    }
  };

  const fetchLatLon = async (placeId: string) => {
    try {
      const results = await geocodeByPlaceId(placeId);

      const fetchedLat = results[0].geometry.location.lat();
      const fetchedLon = results[0].geometry.location.lng();
      return { fetchedLat, fetchedLon };
    } catch (error) {
      console.log(error);
      return { fetchedLat: null, fetchedLon: null };
    }
  };

  const handleAddressChange = async (newValue: SingleValue<Option>) => {
    setValue('address', newValue);
    if (newValue?.value?.place_id) {
      const { fetchedLat, fetchedLon } = (await fetchLatLon(newValue.value.place_id)) as {
        fetchedLat: number;
        fetchedLon: number;
      };
      if (fetchedLat && fetchedLon) {
        setLat(fetchedLat.toString());
        setLon(fetchedLon.toString());
      }
    }
  };

  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="name" {...register('name')} />
      <input type="text" placeholder="description" {...register('description')} />
      <input type="number" placeholder="price" {...register('price')} />
      <input {...register('image')} type="file" />

      <Controller
        control={control}
        name="address"
        render={({ field: { value } }) => (
          <GooglePlacesAutocomplete
            apiKey={VITE_APP_GOOGLE_MAPS_KEY || ''}
            selectProps={{
              value,
              onChange: (newValue) => {
                handleAddressChange(newValue);
              },
            }}
          />
        )}
      />

      <APIProvider apiKey={VITE_APP_GOOGLE_MAPS_KEY || ''} libraries={['places']} language="en">
        <Map
          style={{ width: '300px', height: '300px' }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling="greedy"
          disableDefaultUI
          mapId="<Your custom MapId here>"
          onClick={(e) => {
            if (e.detail.latLng?.lat && e.detail.latLng?.lng) {
              setLat(e.detail.latLng?.lat.toString());
              setLon(e.detail.latLng?.lng.toString());

              geocodeByLatLng({ lat: e.detail.latLng?.lat, lng: e.detail.latLng.lng })
                .then((results) => {
                  const foundPlace =
                    results.find((item) => item.types.includes('premise')) ||
                    results.find((item) => item.types.includes('administrative_area_level_2')) ||
                    results.find((item) => item.types.includes('administrative_area_level_1')) ||
                    results[0];

                  setValue('address', {
                    label: foundPlace.formatted_address || '',

                    value: {
                      place_id: foundPlace.place_id || '',
                    },
                  });
                })
                .catch((error) => console.error(error));
            }
          }}
        >
          {lat && lon ? <AdvancedMarker position={{ lat: Number(lat), lng: Number(lon) }} /> : null}
        </Map>
      </APIProvider>

      <button type="submit">Submit</button>
    </S.Wrapper>
  );
}
