import styled from 'styled-components';

const BUTTON_SIZE = {
  small: {
    padding: '0.4375rem 1rem',
    borderRadius: '0.375rem',
    fontSize: 'var(--font-16)',
    fontWeight: 'var(--font-regular)',
    letterSpacing: '-0.01rem',
    width: '5.75rem',
  },
  medium: {
    padding: '0.875rem 1.5rem',
    borderRadius: '0.75rem',
    fontSize: 'var(--font-18)',
    fontWeight: 'var(--font-bold)',
    letterSpacing: '-0.0112rem',
    width: '17.5rem',
  },
  large: {
    padding: '0.875rem 1.5rem',
    borderRadius: '0.75rem',
    fontSize: 'var(--font-18)',
    fontWeight: 'var(--font-bold)',
    letterSpacing: '-0.0112rem',
    width: '45rem',
  },
};

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: var(--purple-600);
  color: var(--white);
  text-align: center;
  cursor: pointer;

  padding: ${(props) =>
    props.size ? BUTTON_SIZE[props.size].padding : '0.875rem 1.5rem'};
  border-radius: ${(props) =>
    props.size ? BUTTON_SIZE[props.size].borderRadius : '0.75rem'};
  font-size: ${(props) =>
    props.size ? BUTTON_SIZE[props.size].fontSize : 'var(--font-18)'};
  font-weight: ${(props) =>
    props.size ? BUTTON_SIZE[props.size].fontWeight : 'var(--font-bold)'};
  letter-spacing: ${(props) =>
    props.size ? BUTTON_SIZE[props.size].letterSpacing : '-0.0112rem'};
  width: ${(props) => (props.size ? BUTTON_SIZE[props.size].width : '100%')};

  &:hover {
    background: var(--purple-700);
  }

  &:disabled {
    background: var(--gray-200);
  }
`;
