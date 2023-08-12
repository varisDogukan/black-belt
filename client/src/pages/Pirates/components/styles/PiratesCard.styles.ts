import mediaQuery from 'src/mediaQuery';
import styled from 'styled-components';

const Wrapper = styled.article`
  padding: 15px;
  height: max-content;
  border: var(--border);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .img-container {
    width: 250px;
    height: 250px;
    display: flex;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    .button-container {
      display: flex;
      gap: 20px;

      a {
        background-color: var(--blue);
      }

      button:last-child {
        background-color: var(--red);
      }
    }
  }

  @media ${mediaQuery.tablet} {
    display: flex;

    .img-container {
      margin-bottom: 0;
    }
  }
`;

export default Wrapper;
