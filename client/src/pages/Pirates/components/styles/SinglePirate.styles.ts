import mediaQuery from 'src/mediaQuery';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: var(--orange);
  min-height: calc(100vh - 70px);
  padding: 30px 0;
  display: flex;

  .max-container {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin-bottom: 40px;

      .img-container {
      }

      .quote {
        font-size: var(--f-xl);
      }
    }

    .content {
      background-color: var(--white);
      border: var(--border);
      padding: 20px;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;

      h2 {
        margin-bottom: 20px;
        text-align: center;
      }

      .sub {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;

        & > p:first-child {
          width: 100px;
          font-weight: 700;
          color: var(--brown);
        }

        & > button {
          width: 100%;
        }
      }
    }
  }

  @media ${mediaQuery.phone} {
    .max-container {
      .content {
        .sub {
          flex-wrap: nowrap;

          & > button {
            width: 120px;
            margin-left: auto;
          }
        }
      }
    }
  }

  @media ${mediaQuery.tablet} {
    .max-container {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 20px;
    }
  }
`;

export default Wrapper;
