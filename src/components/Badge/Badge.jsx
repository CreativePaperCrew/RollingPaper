import React from 'react';
import * as S from './BadgeStyle';

const RELATIONSHIP = {
  지인: {
    background: 'var(--orange-100)',
    color: 'var(--orange-500)',
  },
  동료: {
    background: 'var(--purple-100)',
    color: 'var(--purple-600)',
  },
  가족: {
    background: 'var(--green-100)',
    color: 'var(--green-500)',
  },
  친구: {
    background: 'var(--green-100)',
    c5olor: 'var(--blue-00)',
  },
};

const Badge = ({ relationship }) => {
  const type = RELATIONSHIP[relationship];

  return (
    <S.BadgeContainer $background={type.background}>
      <S.Relationship $color={type.color}>{relationship}</S.Relationship>
    </S.BadgeContainer>
  );
};

export default Badge;
