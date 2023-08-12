import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 10px;

  label {
    text-transform: capitalize;
  }

  select {
    width: 100%;
    padding: 0 10px;
    height: 48px;
    font-size: var(--fs-lg);
    border: var(--border);
  }
`;

export default Wrapper;
