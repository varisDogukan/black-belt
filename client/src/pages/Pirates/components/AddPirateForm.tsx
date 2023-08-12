/* eslint-disable import/no-cycle */
import { AddPirateLeftForm, AddPirateRightForm } from '.';
import Wrapper from './styles/AddPirateForm.styles';

export default function AddPirateForm() {
  return (
    <Wrapper>
      <div className="max-container">
        <AddPirateLeftForm />
        <AddPirateRightForm />
      </div>
    </Wrapper>
  );
}
