import { useAppContext } from 'src/context/appContext';
import Wrapper from './styles/CrewStats.styles';

export default function CrewStats() {
  const {
    state: { pirates },
  } = useAppContext();

  const totalChests = pirates.reduce((sum, p) => sum + (p.chests ?? 0), 0);
  const pegLegCount = pirates.filter((p) => p.pegLeg).length;

  return (
    <Wrapper>
      <div className="inner">
        <div className="stat">
          <strong>{pirates.length}</strong>
          <span>Pirates</span>
        </div>

        <div className="stat">
          <strong>{totalChests}</strong>
          <span>Total Chests</span>
        </div>

        <div className="stat">
          <strong>{pegLegCount}</strong>
          <span>Peg Legs</span>
        </div>
      </div>
    </Wrapper>
  );
}
