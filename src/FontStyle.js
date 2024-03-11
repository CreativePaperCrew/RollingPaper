import { css } from 'styled-components';

const fontFamilies = {
  'Noto Sans': css`
    font-family: 'Noto Sans', sans-serif;
  `,
  Pretendard: css`
    font-family: 'Pretendard', sans-serif;
  `,
  나눔명조: css`
    font-family: 'Nanum Myeongjo', serif;
  `,
  '나눔손글씨 손편지체': css`
    font-family: 'Nanum Pen Script', cursive;
  `,
};

export const getFontStyle = (fontName) =>
  fontFamilies[fontName] || fontFamilies.Pretendard;
