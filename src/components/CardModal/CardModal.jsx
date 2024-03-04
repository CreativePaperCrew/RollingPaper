import React from 'react';
import Badge from '../Badge/Badge';
import * as S from './CardModalStyle';

import { formatKSTDate } from '../../utils/formatKSTDate';

const CardModal = ({ cardData, onClose }) => {
  const { content, createdAt, font, profileImageURL, relationship, sender } =
    cardData;

  return (
    <S.ModalBackground onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.CardTop>
          <S.CardProfile>
            <S.ProfileImgContainer>
              <S.ProfileImg src={profileImageURL} />
            </S.ProfileImgContainer>
            <S.AuthorContainer>
              <S.AuthorTitle>
                <S.AuthorFrom>From.</S.AuthorFrom>
                <S.Author>{sender}</S.Author>
                <S.CardDate>{formatKSTDate(createdAt)}</S.CardDate>
              </S.AuthorTitle>
              <Badge relationship={relationship} />
            </S.AuthorContainer>
          </S.CardProfile>
        </S.CardTop>
        <S.ContentContainer>
          <S.Content>{content}</S.Content>
        </S.ContentContainer>
        <S.ModalCloseButton onClick={onClose}>확인</S.ModalCloseButton>
      </S.ModalContent>
    </S.ModalBackground>
  );
};

export default CardModal;
