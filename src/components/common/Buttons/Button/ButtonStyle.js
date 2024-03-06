import styled from 'styled-components';
import { BUTTON_SIZE } from '../../../../constants/buttonSize';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: var(--purple-600);
  color: var(--white);
  text-align: center;
  cursor: pointer;

  padding: ${(props) => BUTTON_SIZE[props.size].padding};
  border-radius: ${(props) => BUTTON_SIZE[props.size].borderRadius};
  font-size: ${(props) => BUTTON_SIZE[props.size].fontSize};
  font-weight: ${(props) => BUTTON_SIZE[props.size].fontWeight};
  letter-spacing: ${(props) => BUTTON_SIZE[props.size].letterSpacing};
  width: ${(props) => BUTTON_SIZE[props.size].width};

  &:hover {
    background: var(--purple-700);
  }

  &:disabled {
    background: var(--gray-200);
  }
`;
