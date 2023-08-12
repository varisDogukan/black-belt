import { Title } from 'src/shared';
import Wrapper from './styles/Home.styles';
import Sign from './components/Sign';

export default function Home() {
  return (
    <Wrapper>
      <Title title="Welcome to Pirate Crew" unbuttoned="true" />
      <Sign />
    </Wrapper>
  );
}
