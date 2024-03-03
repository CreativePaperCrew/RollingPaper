import styled from 'styled-components';
import { BUTTON_SIZE } from '../../../../constants/buttonSize';

export const Button = styled.button`
  display: flex;
  padding: ${(props) =>
    props.size === 'small' ? '0.4375rem 1rem' : '0.875rem 1.5rem'};
  justify-content: center;
  align-items: center;
  border-radius: ${(props) =>
    props.size === 'small' ? '0.375rem' : '0.75rem'};
  border: none;
  background: var(--purple-600);
  color: var(--white);
  text-align: center;
  font-size: ${(props) =>
    props.size === 'small' ? 'var(--font-16)' : 'var(--font-18)'};
  font-weight: ${(props) =>
    props.size === 'small' ? 'var(--font-regular)' : 'var(--font-bold)'};
  line-height: ${(props) => (props.size === 'small' ? '1.625rem' : '1.75rem')};
  letter-spacing: ${(props) =>
    props.size === 'small' ? '-0.01rem' : '-0.0112rem'};
  width: ${(props) => (props.size ? `${BUTTON_SIZE[props.size]}rem` : 'auto')};
  cursor: pointer;

  &:hover {
    background: var(--purple-700);
  }

  &:disabled {
    background: var(--gray-200);
  }
`;
