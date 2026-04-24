import mediaQuery from 'src/mediaQuery';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: var(--white);
  border: var(--border);
  box-shadow: var(--bs-full);

  .inner {
    width: min(95%, var(--max-width));
    margin: 0 auto;
    padding: 16px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    min-width: 100px;
    gap: 2px;

    dd {
      font-size: var(--f-lg);
      font-weight: bold;
      color: var(--brown);
      margin: 0;
    }

    dt {
      font-size: var(--f-sm);
      color: var(--black);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  }

  @media ${mediaQuery.tablet} {
    .inner {
      gap: 32px;
    }
  }
`;

export default Wrapper;
