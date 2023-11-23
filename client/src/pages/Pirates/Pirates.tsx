/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useAppContext } from 'src/context/appContext';
import { PirateLoader, Title } from 'src/shared';
import { IPirate } from 'src/context/context.types';
import PiratesCard from './components/PiratesCard';
import Wrapper from './styles/Pirates.styles';
import { EmptyPirate } from './components';

export default function Pirates() {
  const {
    getAllPirates,
    state: { pirateLoading, pirates },
  } = useAppContext();

  useEffect(() => {
    getAllPirates();
  }, []);

  const showTag = () => {
    if (pirateLoading) return <PirateLoader />;

    if (!pirateLoading && pirates.length === 0) return <EmptyPirate />;

    return (
      <div className="max-container">
        {pirates.map((item: IPirate) => (
          <PiratesCard key={item._id} {...item} />
        ))}
      </div>
    );
  };

  return (
    <Wrapper>
      <Title title="Pirate Crew" url="/pirates/new" buttonTitle="Add Pirate" />

      {showTag()}
    </Wrapper>
  );
}
