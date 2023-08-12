import styled from 'styled-components';

const Wrapper = styled.div`
  font-weight: bold;
  font-family: monospace;
  display: grid;
  font-size: 13px;

  &:before,
  &:after {
    content: 'Loading...';
    grid-area: 1/1;
    -webkit-mask-size:
      100% 5px,
      100% 100%;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    animation: c5-1 1s infinite;
  }

  &:before {
    -webkit-mask-image: linear-gradient(#000 0 0), linear-gradient(#000 0 0);
  }

  &:after {
    -webkit-mask-image: linear-gradient(#000 0 0);
    animation:
      c5-1 1s infinite,
      c5-2 0.2s infinite cubic-bezier(0.5, 200, 0.5, -200);
  }

  @keyframes c5-1 {
    0% {
      -webkit-mask-position:
        0 20px,
        0 0;
    }
    20% {
      -webkit-mask-position:
        0 8px,
        0 0;
    }
    40% {
      -webkit-mask-position:
        0 100%,
        0 0;
    }
    60% {
      -webkit-mask-position:
        0 3px,
        0 0;
    }
    80% {
      -webkit-mask-position:
        0 15px,
        0 0;
    }
    100% {
      -webkit-mask-position:
        0 0,
        0 0;
    }
  }

  @keyframes c5-2 {
    100% {
      transform: translate(0.1px);
    }
  }
`;

export default Wrapper;
