import { useState } from 'react';
import Modal from '@mui/material/Modal';

import ListingForm from '../ListingForm/ListingForm';
import * as S from './Header.styled';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalOpenHandler = () => {
    setIsModalOpen(true);
  };

  const modalCloseHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <S.Wrapper>
      <p>Searhbar</p>
      <input type="text" />
      <button type="button" onClick={modalOpenHandler}>
        Create listing
      </button>
      <Modal
        open={isModalOpen}
        onClose={modalCloseHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.ModalBody>
          <ListingForm modalCloseHandler={modalCloseHandler} />
        </S.ModalBody>
      </Modal>
    </S.Wrapper>
  );
}
