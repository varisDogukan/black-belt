import { useAppContext } from 'src/context/appContext';
import Wrapper from './styles/AlertBox.styles';

import getIcon from './helpers/common.functions';

export default function AlertBox() {
  const {
    state: { alertType, alertText },
  } = useAppContext();

  return (
    <Wrapper
      style={{ '--alert': alertType === 'success' ? '#15803d' : '#b91c1c' }}
    >
      <img
        src={getIcon(alertType)}
        alt={`${alertType} icon`}
        className="icon"
      />
      <div className="alert-content">
        <p className="alert-title">{alertType}</p>
        <p className="alert-message">{alertText}</p>
      </div>
    </Wrapper>
  );
}
