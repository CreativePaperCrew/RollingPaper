import React from 'react';
import Badge from '../Badge/Badge';
import * as S from './CardModalStyle';
import * as PS from '../PostCard/PostCardStyle';
import { formatKSTDate } from '../../utils/formatKSTDate';

const CardModal = ({ cardData, onClose }) => {
  const { content, createdAt, font, profileImageURL, relationship, sender } =
    cardData;

  return (
    <S.ModalBackground onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <PS.PostCardTop>
          <PS.PostCardProfile>
            <S.ProfileImgContainer>
              <S.ProfileImg src={profileImageURL} />
            </S.ProfileImgContainer>
            <PS.AuthorContainer>
              <PS.AuthorTitle>
                <PS.AuthorFrom>From.</PS.AuthorFrom>
                <PS.Author>{sender}</PS.Author>
                <S.CardDate>{formatKSTDate(createdAt)}</S.CardDate>
              </PS.AuthorTitle>
              <Badge relationship={relationship} />
            </PS.AuthorContainer>
          </PS.PostCardProfile>
        </PS.PostCardTop>
        <S.ContentContainer>
          <S.Content $font={font}>{content}</S.Content>
        </S.ContentContainer>
        <S.ModalCloseButton onClick={onClose} size="medium">
          확인
        </S.ModalCloseButton>
      </S.ModalContainer>
    </S.ModalBackground>
  );
};

export default CardModal;
