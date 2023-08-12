import img from 'src/assets/compass.png';
import Wrapper from './styles/EmptyPirate.styles';

function EmptyPirate() {
  return (
    <Wrapper>
      <img src={img} alt="empty illustration" />

      <h2>There is nothing here</h2>

      <p>
        Create a new pirate by clicking the <span>Add Pirate</span> button and
        get started
      </p>
    </Wrapper>
  );
}

export default EmptyPirate;
