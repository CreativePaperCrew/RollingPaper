import React from 'react';
import * as S from './ErrorPageStyle';
import { Link } from 'react-router-dom';
import ErrorLogo from '../../assets/images/error.png';
import Button from '../../components/common/Buttons/Button/Button';

const ErrorPage = () => {
  return (
    <S.ErrorPageContainer>
      <S.ErrorImage src={ErrorLogo} alt="에러 아이콘" />
      <S.MainMessage>요청하신 페이지를 찾을 수 없습니다.</S.MainMessage>
      <S.SecondaryMessage>
        더 이상 접근할 수 없거나 잘못된 주소입니다.
      </S.SecondaryMessage>
      <Link to="/">
        <Button size="medium">메인으로</Button>
      </Link>
    </S.ErrorPageContainer>
  );
};

export default ErrorPage;
