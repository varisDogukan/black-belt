import { Button, InputGroup } from 'src/shared';
import { useAppContext } from 'src/context/appContext';
import { FormWrapper } from './styles/Sign.styles';

export default function Register() {
  const {
    state: {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      userLoading,
    },
    handleChange,
    setupUser,
  } = useAppContext();

  const handleSubmit = () => {
    setupUser({
      currentUser: {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      },
      endPoint: 'register',
    });
  };

  return (
    <FormWrapper>
      <h2>Register</h2>

      <InputGroup
        type="text"
        name="firstName"
        title="first name"
        method={handleChange}
        value={firstName}
      />
      <InputGroup
        type="text"
        name="lastName"
        title="last name"
        method={handleChange}
        value={lastName}
      />
      <InputGroup
        type="email"
        name="email"
        title="email"
        method={handleChange}
        value={email}
      />
      <InputGroup
        type="password"
        name="password"
        title="password"
        method={handleChange}
        value={password}
      />
      <InputGroup
        type="password"
        name="confirmPassword"
        title="confirm password"
        method={handleChange}
        value={confirmPassword}
      />

      <Button
        title="Register"
        isNormalButton="true"
        method={handleSubmit}
        loading={userLoading}
      />
    </FormWrapper>
  );
}
