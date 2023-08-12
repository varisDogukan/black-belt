import { HandleChange } from 'src/context/context.types';
import Wrapper from './styles/SelectGroup.styles';

const crewPosition = [
  { id: 0, text: 'Captain' },
  { id: 1, text: 'First Mate' },
  { id: 2, text: 'Quarter Master' },
  { id: 3, text: 'Boatswain' },
  { id: 4, text: 'Powder Monkey' },
];

type SelectGroupProps = {
  title: string;
  name: string;
  value: string;
  method: ({ name, value }: HandleChange) => void;
};

export default function SelectGroup({
  title,
  name,
  method,
  value,
}: SelectGroupProps) {
  const handleChange = (evn: React.ChangeEvent<HTMLSelectElement>) => {
    method({ name: evn.target.name, value: evn.target.value });
  };

  return (
    <Wrapper>
      <label htmlFor={name}>{title}:</label>
      <select name={name} id={name} onChange={handleChange} value={value}>
        {crewPosition.map((item) => (
          <option key={item.id} value={item.text}>
            {item.text}
          </option>
        ))}
      </select>
    </Wrapper>
  );
}
