/* eslint-disable no-underscore-dangle */
import { useAppContext } from 'src/context/appContext';
import { Button } from 'src/shared';
import Wrapper from './styles/SinglePirate.styles';

export default function SinglePirate() {
  const {
    state: { singlePirate },
    updatePirate,
  } = useAppContext();

  const yesOrNo = (value: boolean | undefined) => {
    return value ? 'Yes' : 'No';
  };

  const greenOrRed = (value: boolean | undefined) => {
    return value ? '#b91c1c' : '#15803d';
  };

  return (
    <Wrapper>
      <div className="max-container">
        <div className="container">
          <div className="img-container">
            <img src={singlePirate?.image} alt={singlePirate?.name} />
          </div>

          <q className="quote">{singlePirate?.phrase}</q>
        </div>

        <div className="content">
          <h2>About</h2>

          <div className="sub">
            <p>Position:</p>
            <p>{singlePirate?.crewPosition}</p>
          </div>

          <div className="sub">
            <p>Treasures:</p>
            <p>{singlePirate?.chests}</p>
          </div>

          <div className="sub">
            <p>Peg Leg:</p>

            <p>{yesOrNo(singlePirate?.pegLeg)}</p>
            <Button
              title={yesOrNo(!singlePirate?.pegLeg)}
              isNormalButton="true"
              color={greenOrRed(singlePirate?.pegLeg)}
              method={() =>
                updatePirate(singlePirate?._id, 'pegLeg', !singlePirate?.pegLeg)
              }
            />
          </div>

          <div className="sub">
            <p>Eye Patch:</p>

            <p>{yesOrNo(singlePirate?.eyePatch)}</p>
            <Button
              title={yesOrNo(!singlePirate?.eyePatch)}
              isNormalButton="true"
              color={greenOrRed(singlePirate?.eyePatch)}
              method={() =>
                updatePirate(
                  singlePirate?._id,
                  'eyePatch',
                  !singlePirate?.eyePatch
                )
              }
            />
          </div>

          <div className="sub">
            <p>Hook Hand:</p>

            <p>{yesOrNo(singlePirate?.hookHand)}</p>
            <Button
              title={yesOrNo(!singlePirate?.hookHand)}
              isNormalButton="true"
              color={greenOrRed(singlePirate?.hookHand)}
              method={() =>
                updatePirate(
                  singlePirate?._id,
                  'hookHand',
                  !singlePirate?.hookHand
                )
              }
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
