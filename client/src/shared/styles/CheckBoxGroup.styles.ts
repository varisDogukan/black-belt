import styled from 'styled-components';

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 13px;
  cursor: pointer;
  user-select: none;
  width: max-content;

  input,
  img {
    display: none;
  }

  .box {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    background-color: var(--white);
    border: var(--border);
    display: grid;
    place-content: center;
  }

  input:checked + .box {
    background-color: var(--white);

    img {
      display: block;
    }
  }

  p {
    text-transform: capitalize;
    line-height: 1;
    color: var(--brown);
    font-size: var(--f-md);
  }
`;

export default Wrapper;
