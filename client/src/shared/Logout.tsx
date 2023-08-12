import { useAppContext } from 'src/context/appContext';
import Wrapper from './styles/Logout.styles';

export default function Logout() {
  const { logoutUser } = useAppContext();

  return <Wrapper onClick={() => logoutUser()}>Logout</Wrapper>;
}
