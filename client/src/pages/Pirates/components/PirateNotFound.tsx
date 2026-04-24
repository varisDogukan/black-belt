import img from 'src/assets/compass.png';
import { Button } from 'src/shared';
import Wrapper from './styles/PirateNotFound.styles';

export default function PirateNotFound() {
  return (
    <Wrapper>
      <img src={img} alt="pirate not found illustration" />

      <h2>Pirate not found</h2>

      <p>
        This pirate does not exist or you do not have <span>permission</span> to
        view it.
      </p>

      <Button title="Back to Crew Board" url="/pirates" />
    </Wrapper>
  );
}
