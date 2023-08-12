import mediaQuery from 'src/mediaQuery';
import styled from 'styled-components';

const Wrapper = styled.form`
  min-height: calc(100vh - 70px);
  background-color: var(--orange);
  padding: 30px 0;

  .max-container {
    label {
      margin-bottom: 10px;
    }

    button {
      background-color: var(--blue);
    }

    @media ${mediaQuery.tablet} {
      display: flex;
      gap: 20px;
    }
  }
`;

export default Wrapper;
