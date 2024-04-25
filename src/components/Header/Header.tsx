import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { useDebounceCallback } from 'usehooks-ts';
import { FaPlus } from 'react-icons/fa';
import { useListings } from '../../hooks';
import ListingForm from '../ListingForm/ListingForm';
import * as S from './Header.styled';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { searchQueryHandler } = useListings();
  const debouncedSearchQueryHandler = useDebounceCallback(searchQueryHandler, 500);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.Wrapper>
      <S.SearchbarContainer>
        <S.Searchbar
          type="text"
          placeholder="Search by name and description"
          onChange={(e) => {
            debouncedSearchQueryHandler(e.target.value);
          }}
        />
        <S.SearchbarIcon />
      </S.SearchbarContainer>

      <S.Button type="button" onClick={openModal}>
        Create listing <FaPlus />
      </S.Button>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.ModalBody>
          <h2>Provide some listing information</h2>
          <ListingForm modalCloseHandler={closeModal} />
        </S.ModalBody>
      </Modal>
    </S.Wrapper>
  );
}
