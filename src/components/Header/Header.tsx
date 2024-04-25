import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { FaPlus } from 'react-icons/fa';
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
      <input type="text" />
      <S.Button type="button" onClick={modalOpenHandler}>
        Create listing <FaPlus />
      </S.Button>
      <Modal
        open={isModalOpen}
        onClose={modalCloseHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.ModalBody>
          <h2>Provide some listing information</h2>
          <ListingForm modalCloseHandler={modalCloseHandler} />
        </S.ModalBody>
      </Modal>
    </S.Wrapper>
  );
}
