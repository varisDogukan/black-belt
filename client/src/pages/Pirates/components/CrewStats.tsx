import { useAppContext } from 'src/context/appContext';
import Wrapper from './styles/CrewStats.styles';

export default function CrewStats() {
  const {
    state: { pirates },
  } = useAppContext();

  const totalChests = pirates.reduce((sum, p) => sum + (p.chests ?? 0), 0);
  const pegLegCount = pirates.filter((p) => p.pegLeg).length;

  return (
    <Wrapper aria-label="Crew statistics">
      <dl className="inner">
        <div className="stat">
          <dt>Pirates</dt>
          <dd>{pirates.length}</dd>
        </div>

        <div className="stat">
          <dt>Total Chests</dt>
          <dd>{totalChests}</dd>
        </div>

        <div className="stat">
          <dt>Peg Legs</dt>
          <dd>{pegLegCount}</dd>
        </div>
      </dl>
    </Wrapper>
  );
}
