/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from 'src/context/appContext';
import { PirateLoader, Title } from 'src/shared';
import SinglePirate from './components/SinglePirate';
import Wrapper from './styles/PirateDetail.styles';

export default function PirateDetail() {
  const {
    getSinglePirate,
    state: { singlePirate, pirateLoading },
  } = useAppContext();

  const { id } = useParams();

  useEffect(() => {
    getSinglePirate(id!);
  }, [id]);

  const showTag = () => {
    if (pirateLoading) return <PirateLoader />;

    return <SinglePirate />;
  };

  return (
    <Wrapper>
      <Title
        title={singlePirate?.name || 'Nobody'}
        buttonTitle="Crew Board"
        url="/pirates"
      />

      {showTag()}
    </Wrapper>
  );
}
