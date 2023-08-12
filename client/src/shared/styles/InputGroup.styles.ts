import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 20px;
  }

  label {
    text-transform: capitalize;
  }

  input {
    width: 100%;
    border: var(--border);
    padding: 10px;
  }
`;

export default Wrapper;
