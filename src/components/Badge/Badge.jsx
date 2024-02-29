import React from 'react';
import * as S from './BadgeStyle';

const RELATIONSHIP = {
  지인: {
    background: '--orange-100',
    color: '--orange-500',
  },
  동료: {
    background: '--purple-100',
    color: '--purple-600',
  },
  가족: {
    background: '--green-100',
    color: '--green-500',
  },
  친구: {
    background: '--green-100',
    color: '--blue-500',
  },
};

const Badge = ({ relationship }) => {
  const type = RELATIONSHIP[relationship];

  return (
    <S.BadgeContainer background={type.background}>
      <S.Relationship color={type.color}>{relationship}</S.Relationship>
    </S.BadgeContainer>
  );
};

export default Badge;
