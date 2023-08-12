import Wrapper from './styles/Sign.styles';
import { Login, Register } from '.';

export default function Sign() {
  return (
    <Wrapper>
      <div className="max-container">
        <Register />
        <Login />
      </div>
    </Wrapper>
  );
}
