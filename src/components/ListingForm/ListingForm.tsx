import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
  geocodeByLatLng,
} from 'react-google-places-autocomplete';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import axios from 'axios';
import { Option } from 'react-google-places-autocomplete/build/types';
import { SingleValue } from 'react-select';
import { toast } from 'react-toastify';
import * as S from './ListingForm.styled';
import { listingFormValidation } from '../../validation';
import getErrorMessage from '../../helpers/getErrorMessage';
import { useListings } from '../../hooks';


const { VITE_APP_GOOGLE_MAPS_KEY } = process.env;

interface IListingFormProps {
  modalCloseHandler: () => void;
}

export default function ListingForm({ modalCloseHandler }: IListingFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(listingFormValidation),
  });

  const { refreshListingsData } = useListings();
  const [address, setAddress] = useState<SingleValue<Option>>(null);
  const [addressError, setAddressError] = useState<string | null>(null);

  const [lat, setLat] = useState<string | null>(null);
  const [lon, setLon] = useState<string | null>(null);

  const [centerLat, setCenterLat] = useState<number>(50); // Default to 50
  const [centerLng, setCenterLng] = useState<number>(30); // Default to 30

  const [mapKey, setMapKey] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const updateCenter = (mapCenterLat: number, mapCenterLng: number) => {
    setCenterLat(mapCenterLat);
    setCenterLng(mapCenterLng);
    setMapKey((prevValue) => prevValue + 1);
  };

  const onSubmit = async (data: {
    name: string;
    description: string;
    price: number;
    image?: any;
  }) => {
    if (!address) {
      return;
    }
    const formData = new FormData();
    if (lat !== null && lat !== undefined && lon !== null && lon !== undefined && address) {
      formData.append('name', data.name);
      formData.append('description', data.description);
      formData.append('price', data.price.toString());
      formData.append('address', address.label);
      formData.append('lat', lat);
      formData.append('lon', lon);
      const imageFile = new File([data.image[0]], data.image[0].name, { type: data.image[0].type });
      formData.append('image', imageFile);

      try {
        setIsLoading(true);

        const response = await axios.post(
          'https://listings-app-backend.onrender.com/listings',
          formData,
        );

        setIsLoading(false);
        if (response.status === 200) {
          refreshListingsData();
          modalCloseHandler();
        }
      } catch (error) {
        toast.error(getErrorMessage(error));
        setIsLoading(false);
      }
    }
  };

  const fetchLatLon = async (placeId: string) => {
    try {
      const results = await geocodeByPlaceId(placeId);

      const fetchedLat = results[0].geometry.location.lat();
      const fetchedLon = results[0].geometry.location.lng();

      return { fetchedLat, fetchedLon };
    } catch (error) {
      setAddressError(getErrorMessage(error));

      return { fetchedLat: null, fetchedLon: null };
    }
  };

  const handleAddressChange = async (newValue: SingleValue<Option>) => {
    if (newValue === null) {
      setAddress(null);
    }
    setAddress(newValue);
    if (newValue?.value?.place_id) {
      const { fetchedLat, fetchedLon } = (await fetchLatLon(newValue.value.place_id)) as {
        fetchedLat: number;
        fetchedLon: number;
      };
      if (fetchedLat && fetchedLon) {
        setLat(fetchedLat.toString());
        setLon(fetchedLon.toString());
        updateCenter(fetchedLat, fetchedLon);
        setAddressError(null);
      }
    }
  };

  return (
    <S.Wrapper
      onSubmit={(e) => {
        e.preventDefault();

        if (!address) {
          setAddressError('Address is required');
        }
        handleSubmit(onSubmit)();
      }}
    >
      <S.TextInput type="text" placeholder="name" {...register('name')} />
      <S.ErrorField>{errors.name && errors.name.message}</S.ErrorField>
      <S.TextInput type="text" placeholder="description" {...register('description')} />
      <S.ErrorField>{errors.description && errors.description.message}</S.ErrorField>
      <S.TextInput type="number" placeholder="price" {...register('price')} />
      <S.ErrorField>{errors.price && errors.price.message}</S.ErrorField>

      <S.Label htmlFor="image">Upload listing image:</S.Label>
      <S.TextInput id="image" type="file" {...register('image')} placeholder="123" />

      <S.ErrorField>{errors.image && errors.image.message}</S.ErrorField>

      <GooglePlacesAutocomplete
        apiKey={VITE_APP_GOOGLE_MAPS_KEY || ''}
        selectProps={{
          value: address,
          onChange: (newValue) => {
            handleAddressChange(newValue);
          },
        }}
      />
      <S.ErrorField>{addressError}</S.ErrorField>

      <APIProvider apiKey={VITE_APP_GOOGLE_MAPS_KEY || ''} libraries={['places']} language="en">
        <Map
          style={{ width: '100%', height: '300px', marginBottom: '15px' }}
          defaultCenter={{ lat: centerLat, lng: centerLng }}
          key={mapKey}
          defaultZoom={5}
          gestureHandling="greedy"
          disableDefaultUI
          mapId="small-map"
          onClick={async (e) => {
            if (e.detail.latLng?.lat && e.detail.latLng?.lng) {
              setLat(e.detail.latLng?.lat.toString());
              setLon(e.detail.latLng?.lng.toString());

              try {
                const response = await geocodeByLatLng({
                  lat: e.detail.latLng?.lat,
                  lng: e.detail.latLng.lng,
                });

                const foundPlace =
                  response.find((item) => item.types.includes('premise')) ||
                  response.find((item) => item.types.includes('administrative_area_level_2')) ||
                  response.find((item) => item.types.includes('administrative_area_level_1')) ||
                  response[0];

                setAddress({
                  label: foundPlace.formatted_address || '',

                  value: {
                    place_id: foundPlace.place_id || '',
                  },
                });

                setAddressError(null);
              } catch (error) {
                setAddressError(getErrorMessage(error));
              }
            }
          }}
        >
          {lat && lon ? <AdvancedMarker position={{ lat: Number(lat), lng: Number(lon) }} /> : null}
        </Map>
      </APIProvider>

      <S.Button className={isLoading ? 'loading' : ''} type="submit">
        Submit
      </S.Button>
    </S.Wrapper>
  );
}
