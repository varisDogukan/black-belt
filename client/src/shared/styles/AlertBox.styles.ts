import styled from 'styled-components';

const Wrapper = styled.div`
  width: 300px;
  height: 70px;
  background-color: var(--orange2);

  border-radius: 8px;
  display: flex;
  align-items: center;

  gap: 20px;
  padding: 20px;

  position: fixed;
  z-index: 11;
  top: 50px;
  left: 50%;
  transform: translate(-50%, -200%);
  border: 2px solid;
  border-color: var(--alert);
  animation: moveBottom 1s forwards cubic-bezier(0.68, -0.55, 0.265, 1.35);

  .icon {
    width: 30px;
    height: 30px;
  }

  .alert-title {
    text-transform: uppercase;
    color: var(--alert);
  }

  .alert-message {
    color: var(--brown);
    text-transform: capitalize;
  }

  @keyframes moveBottom {
    100% {
      transform: translate(-50%, 0%);
    }
  }
`;

export default Wrapper;
