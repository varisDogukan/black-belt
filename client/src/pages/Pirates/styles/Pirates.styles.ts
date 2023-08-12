import mediaQuery from 'src/mediaQuery';
import styled from 'styled-components';

const Wrapper = styled.main`
  background-color: var(--orange);

  & > .max-container {
    min-height: calc(100vh - 70px);
    padding: 30px 0;
    display: grid;
    gap: 20px;
  }

  @media ${mediaQuery.tablet} {
    & > .max-container {
      grid-template-columns: repeat(2, minmax(250px, 1fr));
    }
  }
`;

export default Wrapper;
