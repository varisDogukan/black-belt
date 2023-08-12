import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 70px);

  img {
    width: 252px;
    margin-bottom: 42px;
  }

  h2 {
    font-size: var(--f-lg);
    color: var(--brown);
    margin-bottom: 15px;
  }

  p {
    width: 200px;
    font-size: var(--f-sm);
    text-align: center;
    color: var(--brown);

    span {
      font-weight: 700;
    }
  }
`;

export default Wrapper;
