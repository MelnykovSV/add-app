import { useState } from 'react';
import placeholderImage from '../../assets/placeholder-image.jpeg';
import * as S from './MobileListingCardListItem.styled';
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

      <S.InfoBlock>
        <S.Title>{name} </S.Title>
        <S.Paragraph>
          {description} test add descriptiontest add descriptiontest add descriptiontest add
          descriptiontest add descriptiontest add descriptiontest add descriptiontest add
          descriptiontest add descriptiontest add description
        </S.Paragraph>

        <S.Address>{address}</S.Address>
        <S.Price>{`${price} $`}</S.Price>
      </S.InfoBlock>
    </S.Wrapper>
  );
}
