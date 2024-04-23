import { useState } from 'react';
import placeholderImage from '../../assets/placeholder-image.jpeg';
import * as S from './AddCardListItem.styled';

export default function AddCardListItem({ name, id, description, address, price, image }: any) {
  const [imageUrl, setImageUrl] = useState(image || placeholderImage);

  console.log(id);
  return (
    <S.Wrapper
      onClick={() => {
        console.log('click');
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
