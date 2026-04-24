import { useState } from 'react';
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
  const [confirming, setConfirming] = useState(false);

  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>

      <div className="content">
        <h4>{name}</h4>

        {confirming ? (
          <div className="confirm-container" role="alert">
            <span>Are you sure?</span>
            <div className="confirm-buttons">
              <Button
                title={`Yes, delete ${name}`}
                isNormalButton="true"
                method={() => deletePirate(_id)}
              />
              <Button
                title={`No, keep ${name}`}
                isNormalButton="true"
                method={() => setConfirming(false)}
              />
            </div>
          </div>
        ) : (
          <div className="button-container">
            <Button title="View Pirate" url={`/pirates/${_id}`} />
            <Button
              title="Walk the Plank"
              isNormalButton="true"
              method={() => setConfirming(true)}
            />
          </div>
        )}
      </div>
    </Wrapper>
  );
}
