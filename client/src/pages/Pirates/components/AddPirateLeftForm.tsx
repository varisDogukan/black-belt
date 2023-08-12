import { useAppContext } from 'src/context/appContext';
import { InputGroup } from 'src/shared';
import Wrapper from './styles/AddPirateLeftForm.styles';

export default function AddPirateLeftForm() {
  const {
    handleChange,
    state: { name, image, chests, phrase },
  } = useAppContext();

  return (
    <Wrapper>
      <InputGroup
        method={handleChange}
        title="Pirate Name"
        name="name"
        type="text"
        value={name}
      />

      <InputGroup
        method={handleChange}
        title="Image Url"
        name="image"
        type="text"
        value={image}
      />

      <InputGroup
        method={handleChange}
        title="a of Treasure Chests"
        name="chests"
        type="number"
        minCount={0}
        value={chests}
      />

      <InputGroup
        method={handleChange}
        title="Pirate Catch Phrase"
        name="phrase"
        type="text"
        value={phrase}
      />
    </Wrapper>
  );
}
