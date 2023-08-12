import styled from 'styled-components';
import mediaQuery from '../../mediaQuery';

const Wrapper = styled.header`
  background-color: var(--brown);

  .max-container {
    display: flex;
    align-items: center;
    min-height: 70px;
    position: relative;
    justify-content: var(--center);

    p {
      font-size: clamp(var(--f-lg), 5vw, var(--f-xl));
      font-weight: 700;
      color: var(--white);
    }

    .button-container {
      position: absolute;
      right: 0;

      button,
      a {
        background-color: var(--blue);
      }
    }

    @media ${mediaQuery.tablet} {
      justify-content: center;
    }
  }
`;

export default Wrapper;
