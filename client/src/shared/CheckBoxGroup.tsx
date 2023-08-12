/* eslint-disable react/no-unused-prop-types */
import { HandleChange } from 'src/context/context.types';
import img from 'src/assets/icon-check.svg';
import Wrapper from './styles/CheckBoxGroup.styles';

type CheckBoxGroupProps = {
  title: string;
  name: string;
  method: ({ name, value }: HandleChange) => void;
  value: boolean;
};

export default function CheckBoxGroup({
  name,
  title,
  method,
  value,
}: CheckBoxGroupProps) {
  const handleChange = (evn: React.ChangeEvent<HTMLInputElement>) => {
    method({
      name: evn.target.name,
      value: evn.target.checked,
    });
  };

  return (
    <Wrapper htmlFor={name}>
      <input
        type="checkbox"
        name={name}
        id={name}
        onChange={handleChange}
        checked={value}
      />

      <div className="box">
        <img src={img} alt="check icon" />
      </div>
      <p>{title}</p>
    </Wrapper>
  );
}
