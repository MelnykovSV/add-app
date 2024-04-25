import { useState } from 'react';
import placeholderImage from '../../assets/placeholder-image.jpeg';
import * as S from './MobileListingCardListItem.styled';
import { useListings } from '../../hooks';

interface IMobileListingCardListItemProps {
  name: string;
  id: string;
  description: string;
  address: string;
  price: number;
  image: string;
}

export default function MobileListingCardListItem({
  name,
  id,
  description,
  address,
  price,
  image,
}: IMobileListingCardListItemProps) {
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
          src={imageUrl || placeholderImage}
          alt={name}
          onError={() => {
            setImageUrl(placeholderImage);
          }}
        />
      </S.ImageContainer>

      <S.InfoBlock>
        <S.Title>{name} </S.Title>
        <S.Paragraph>{description}</S.Paragraph>

        <S.Address>{address}</S.Address>
        <S.Price>{`${price} $`}</S.Price>
      </S.InfoBlock>
    </S.Wrapper>
  );
}
