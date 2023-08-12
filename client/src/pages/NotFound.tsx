import { useNavigate } from 'react-router-dom';
import { Button } from 'src/shared';
import img from 'src/assets/we-got-a-problem-2.svg';
import Wrapper from './styles/NotFound.styles';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Wrapper className="max-container">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <p className="alert">
        <span>WOops!</span> This page isnt available.
      </p>

      <Button
        title="Go Back"
        isNormalButton="true"
        method={() => navigate(-1)}
      />
    </Wrapper>
  );
}

export default NotFound;
