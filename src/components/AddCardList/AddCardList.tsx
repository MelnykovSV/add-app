import * as S from './AddCardList.styled';
import AddCardListItem from '../AddCardListItem/AddCardListItem';
import useAdds from '../../hooks/useAdds';
import Loader from '../Loader/Loader';

export default function AddCardList() {
  const { adds, isLoading } = useAdds();
  return (
    <S.Wrapper>
      {isLoading && <Loader />}
      <S.ListContainer>
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
      </S.ListContainer>
    </S.Wrapper>
  );
}
