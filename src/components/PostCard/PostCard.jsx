import React, { useEffect, useState } from 'react';
import Badge from '../Badge/Badge';
import * as S from './PostCardStyle';
import deleteImg from '../../assets/icons/deleted.svg';
import editImg from '../../assets/icons/edit.png';
import { formatKSTDate } from '../../utils/formatKSTDate';
import InnerHtml from '../InnerHtml/InnerHtml';

const PostCard = ({ cardData, onClick, onEdit, onDelete, isDelete }) => {
  const [isJson, setIsJson] = useState(false);
  const [runAnimation, setRunAnimation] = useState(true);
  const {
    id,
    content,
    createdAt,
    font,
    profileImageURL,
    relationship,
    sender,
  } = cardData;
  
  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete();
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    onEdit();
  };

  useEffect(() => {
    try {
      JSON.parse(content);
      setIsJson(true);
    } catch (error) {
      setIsJson(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRunAnimation(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <S.PostCardContainer onClick={onClick} $runAnimation={runAnimation}>
      <S.PostCardTop>
        <S.PostCardProfile>
          {isDelete ? (
            <S.ButtonContainer onClick={handleDelete}>
              <S.Button src={deleteImg} alt="카드를 삭제하는 버튼" />
            </S.ButtonContainer>
          ) : (
            <S.ButtonContainer onClick={handleEdit}>
              <S.Button src={editImg} alt="카드를 수정하는 버튼" />
            </S.ButtonContainer>
          )}
          <S.ProfileImg $profileImageURL={profileImageURL} />
          <S.AuthorContainer>
            <S.AuthorTitle>
              <S.AuthorFrom>From.</S.AuthorFrom>
              <S.Author>{sender}</S.Author>
            </S.AuthorTitle>
            <Badge relationship={relationship} />
          </S.AuthorContainer>
        </S.PostCardProfile>
      </S.PostCardTop>
      <S.ContentContainer>
        {isJson && <InnerHtml content={content} font={font} isCard={true} />}
      </S.ContentContainer>
      <S.PostCardDate>{formatKSTDate(createdAt)}</S.PostCardDate>
    </S.PostCardContainer>
  );
};

export default PostCard;
