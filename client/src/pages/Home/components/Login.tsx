import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from 'src/context/appContext';
import { Button, InputGroup } from 'src/shared';
import { FormWrapper } from './styles/Sign.styles';

export default function Login() {
  const navigate = useNavigate();

  const {
    state: { userLoading, lEmail, lPassword, user },
    handleChange,
    setupUser,
  } = useAppContext();

  const handleSubmit = () => {
    setupUser({
      currentUser: {
        email: lEmail,
        password: lPassword,
      },
      endPoint: 'login',
    });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/pirates');
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <FormWrapper>
      <h2>Login</h2>

      <InputGroup
        type="email"
        name="lEmail"
        title="email"
        method={handleChange}
        value={lEmail}
      />
      <InputGroup
        type="password"
        name="lPassword"
        title="password"
        method={handleChange}
        value={lPassword}
      />

      <Button
        title="Login"
        isNormalButton="true"
        method={handleSubmit}
        loading={userLoading}
      />
    </FormWrapper>
  );
}
