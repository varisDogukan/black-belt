/* eslint-disable react/require-default-props */
import { HandleChange } from 'src/context/context.types';
import Wrapper from './styles/InputGroup.styles';

type InputGroupProps = {
  title: string;
  name: string;
  type: string;
  method: ({ name, value }: HandleChange) => void;
  minCount?: number;
  value: string | number;
};

export default function InputGroup({
  title,
  name,
  type,
  method,
  minCount,
  value,
}: InputGroupProps) {
  const handleChange = (evn: React.ChangeEvent<HTMLInputElement>) => {
    method({ name: evn.target.name, value: evn.target.value });
  };

  return (
    <Wrapper>
      <label htmlFor={name}>{title}:</label>
      <input
        type={type}
        name={name}
        id={name}
        onChange={handleChange}
        min={minCount}
        value={value}
      />
    </Wrapper>
  );
}
