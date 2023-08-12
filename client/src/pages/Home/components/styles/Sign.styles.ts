import mediaQuery from 'src/mediaQuery';
import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: calc(100vh - 70px);
  background-color: var(--orange);
  padding: 20px 0;

  .max-container {
    display: flex;
    flex-direction: column;
    gap: 20px;

    h2 {
      text-align: center;
    }

    button {
      background-color: var(--blue);
    }
  }

  @media ${mediaQuery.tablet} {
    .max-container {
      flex-direction: row;
      align-items: flex-start;
    }
  }
`;

export const FormWrapper = styled.form`
  background-color: var(--white);
  border: var(--border);
  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    margin-bottom: 20px;
  }

  @media ${mediaQuery.tablet} {
    flex: 1;
  }
`;

export default Wrapper;
