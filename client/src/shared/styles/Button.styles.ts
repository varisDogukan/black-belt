import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = css`
  cursor: pointer;
  width: max-content;
  padding: 0 10px;
  height: 42px;
  color: var(--white);
  border: var(--border);
  box-shadow: var(--bs-full);
  transition: var(--transition);
  display: grid;
  place-items: center;

  &:hover {
    box-shadow: var(--bs-full-hover);
  }
`;

export const LinkButton = styled(Link)`
  ${Wrapper}
`;

export const NormalButton = styled.button`
  ${Wrapper}

  width: var(--width);
  background-color: var(--color);

  &:disabled {
    background-color: var(--blue2);
    box-shadow: var(--bs-disabled-full);

    &:hover {
      box-shadow: var(--bs-disabled-full-hover);
    }
  }
`;
