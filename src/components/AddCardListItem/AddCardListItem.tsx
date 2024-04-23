import { useState } from 'react';
import placeholderImage from '../../assets/placeholder-image.jpeg';
import * as S from './AddCardListItem.styled';
import useAdds from '../../hooks/useAdds';

export default function AddCardListItem({ name, id, description, address, price, image }: any) {
  const [imageUrl, setImageUrl] = useState(image || placeholderImage);

  const { currentAddHandler } = useAdds();

  return (
    <S.Wrapper
      onClick={() => {
        currentAddHandler(id);
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
