import styled from 'styled-components';

const Wrapper = styled.button`
  position: fixed;
  bottom: 5px;
  border: none;
  padding: 0 8px;
  color: var(--brown);
  font-weight: 500;
  opacity: 0;

  animation: show 1s 3.5s forwards;

  &::after {
    content: '';
    width: 10px;
    height: 100%;
    background-color: var(--red);
    position: absolute;
    top: 0;
    right: -10px;
  }

  @keyframes show {
    0% {
      transform: translateX(-200%);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export default Wrapper;
