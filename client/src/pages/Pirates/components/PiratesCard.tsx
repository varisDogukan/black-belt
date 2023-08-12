import { useAppContext } from 'src/context/appContext';
import { Button } from 'src/shared';
import Wrapper from './styles/PiratesCard.styles';

type PiratesCardProps = {
  _id: string;
  image: string;
  name: string;
};

export default function PiratesCard({ _id, image, name }: PiratesCardProps) {
  const { deletePirate } = useAppContext();

  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>

      <div className="content">
        <h4>{name}</h4>

        <div className="button-container">
          <Button title="View Pirate" url={`/pirates/${_id}`} />
          <Button
            title="Walk the Plank"
            isNormalButton="true"
            method={() => deletePirate(_id)}
          />
        </div>
      </div>
    </Wrapper>
  );
}
