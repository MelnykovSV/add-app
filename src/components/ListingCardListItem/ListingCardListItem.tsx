import { useState } from 'react';
import placeholderImage from '../../assets/placeholder-image.jpeg';
import * as S from './ListingCardListItem.styled';
import { useListings } from '../../hooks';

export default function AddCardListItem({ name, id, description, address, price, image }: any) {
  const [imageUrl, setImageUrl] = useState(image || placeholderImage);

  const { currentListingHandler } = useListings();

  return (
    <S.Wrapper
      onClick={() => {
        currentListingHandler(id);
      }}
    >
      <S.ImageContainer>
        <img
          src={imageUrl}
          alt={name}
          onError={() => {
            setImageUrl(placeholderImage);
          }}
        />
      </S.ImageContainer>

      <h3>{name}</h3>
      <p>{description}</p>
      <p>{address}</p>
      <p>{`${price} $`}</p>
    </S.Wrapper>
  );
}
