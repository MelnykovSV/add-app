import * as S from './AddCardList.styled';
import AddCardListItem from '../AddCardListItem/AddCardListItem';
import useAdds from '../../hooks/useAdds';

export default function AddCardList() {
  const { adds } = useAdds();
  return (
    <S.Wrapper>
      <ul>
        {adds.map(({ name, _id, description, address, price, image }: any) => (
          <AddCardListItem
            key={_id}
            name={name}
            id={_id}
            description={description}
            address={address}
            price={price}
            image={image}
          />
        ))}
      </ul>
    </S.Wrapper>
  );
}
