import React from 'react';
import useInformation from '../../../Hooks/useInformation';
import Extraction from './Extraction';

const Informations = () => {
  const [informations] = useInformation();
  return (
    <div>
      <Extraction></Extraction>
      <p className="text-2xl">Run profile </p>
      <div className=" bg-base-600 ep-form">
      <p>Data {informations.length}</p>
      </div>
    </div>
  );
};

export default Informations;