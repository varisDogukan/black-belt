import { useAppContext } from 'src/context/appContext';
import { SelectGroup, CheckBoxGroup, Button } from 'src/shared';
import Wrapper from './styles/AddPirateRightForm.styles';

export default function AddPirateRightForm() {
  const {
    handleChange,
    createPirate,
    state: { crewPosition, pegLeg, eyePatch, hookHand, pirateLoading },
  } = useAppContext();

  const handleSubmit = () => {
    createPirate();
  };

  return (
    <Wrapper>
      <SelectGroup
        name="crewPosition"
        title="Crew Position"
        method={handleChange}
        value={crewPosition}
      />

      <div className="check-container">
        <CheckBoxGroup
          name="pegLeg"
          title="Peg Leg"
          method={handleChange}
          value={pegLeg}
        />

        <CheckBoxGroup
          name="eyePatch"
          title="Eye Patch"
          method={handleChange}
          value={eyePatch}
        />

        <CheckBoxGroup
          name="hookHand"
          title="Hook Hand"
          method={handleChange}
          value={hookHand}
        />
      </div>

      <Button
        title="Add Pirate"
        isNormalButton="true"
        method={handleSubmit}
        loading={pirateLoading}
      />
    </Wrapper>
  );
}
