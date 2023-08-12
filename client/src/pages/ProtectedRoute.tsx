import { Navigate } from 'react-router-dom';
import { useAppContext } from 'src/context/appContext';

type ProtectRouteProps = {
  children: JSX.Element;
};

export default function ProtectedRoute({ children }: ProtectRouteProps) {
  const {
    state: { user },
  } = useAppContext();

  if (!user) {
    return <Navigate to="/" />;
  }

  return <div>{children}</div>;
}
