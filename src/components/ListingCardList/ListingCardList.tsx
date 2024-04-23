import * as S from './ListingCardList.styled';
import AddCardListItem from '../ListingCardListItem/ListingCardListItem';
import useAdds from '../../hooks/useListings';
import Loader from '../Loader/Loader';

export default function AddCardList() {
  const { listings, isLoading, currentListing } = useAdds();

  return (
    <S.Wrapper>
      {isLoading && <Loader />}
      <S.ListContainer>
        <ul>
          {currentListing ? (
            <AddCardListItem
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
              <AddCardListItem
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
        </ul>
      </S.ListContainer>
    </S.Wrapper>
  );
}
