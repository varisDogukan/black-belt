import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: calc(100vh);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 30px;
  background-color: var(--orange);

  .alert {
    color: var(--orange2);
    font-size: var(--f-lg);

    span {
      font-size: var(--f-xl);
      color: var(--brown);
    }
  }

  .btn {
    width: 100px;
    height: 50px;
    border: none;
    border-radius: var(--br-sm);
    background-color: var(--orange);
    color: var(--white-1);
    font-weight: 700;
    font-size: var(--f-md);
    transition: var(--transition-all);
    display: grid;
    place-content: center;

    &:hover {
      background-color: var(--orange2);
    }
  }
`;

export default Wrapper;
