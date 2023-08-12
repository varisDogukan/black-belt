import { Title } from 'src/shared';
import { AddPirateForm } from './components';
import Wrapper from './styles/AddPirate.styles';

export default function AddPirate() {
  return (
    <Wrapper>
      <Title title="Add Pirate" buttonTitle="Crew Board" url="/pirates" />

      <AddPirateForm />
    </Wrapper>
  );
}
