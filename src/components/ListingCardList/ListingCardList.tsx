import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'usehooks-ts';
import * as S from './ListingCardList.styled';
import ListingCardListItem from '../ListingCardListItem/ListingCardListItem';
import MobileListingCardListItem from '../MobileListingCardListItem/MobileListingCardListItem';
import useListings from '../../hooks/useListings';
import Loader from '../Loader/Loader';
import 'swiper/css';

export default function ListingCardList() {
  const matches = useMediaQuery('(min-width: 768px)');
  const { listings, isLoading, currentListing } = useListings();

  return (
    <S.Wrapper>
      {isLoading && <Loader />}
      <S.ListContainer>
        <S.List>
          {currentListing ? (
            <ListingCardListItem
              key={currentListing.id}
              name={currentListing.name}
              id={currentListing.id}
              description={currentListing.description}
              address={currentListing.address}
              price={currentListing.price}
              image={currentListing.image}
            />
          ) : (
            listings.map(({ name, _id, description, address, price, image }: any) => (
              <ListingCardListItem
                key={_id}
                name={name}
                id={_id}
                description={description}
                address={address}
                price={price}
                image={image}
              />
            ))
          )}
        </S.List>
      </S.ListContainer>

      <S.MobileListContainer>
        <Swiper spaceBetween={10} slidesPerView={matches ? 2 : 1}>
          {currentListing ? (
            <SwiperSlide key={currentListing.id}>
              <MobileListingCardListItem
                name={currentListing.name}
                id={currentListing.id}
                description={currentListing.description}
                address={currentListing.address}
                price={currentListing.price}
                image={currentListing.image}
              />
            </SwiperSlide>
          ) : (
            listings.map(({ name, _id, description, address, price, image }: any) => (
              <SwiperSlide key={_id}>
                <MobileListingCardListItem
                  name={name}
                  id={_id}
                  description={description}
                  address={address}
                  price={price}
                  image={image}
                />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </S.MobileListContainer>
    </S.Wrapper>
  );
}
