import { useState } from 'react';
import TruncateMarkup from 'react-truncate-markup';
import placeholderImage from '../../assets/placeholder-image.jpeg';
import * as S from './ListingCardListItem.styled';
import { useListings } from '../../hooks';

export default function ListingCardListItem({ name, id, description, address, price, image }: any) {
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

      <S.Title>{name} </S.Title>
      <TruncateMarkup lines={3}>
        <S.Paragraph>{description}</S.Paragraph>
      </TruncateMarkup>

      <S.Address>{address}</S.Address>
      <S.Price>{`${price} $`}</S.Price>
    </S.Wrapper>
  );
}
