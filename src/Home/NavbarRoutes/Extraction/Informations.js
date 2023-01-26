import React from 'react';
import useInformation from '../../../Hooks/useInformation';
import Extraction from './Extraction';

import { useForm } from "react-hook-form";
import './Extraction.css';

const Informations = () => {
  const [informations] = useInformation();
  
  const { register} = useForm();
 
  
  return (
    <div>
      <Extraction></Extraction>
      <p className="text-2xl">Run profile </p>
      <div className=" bg-base-600 ep-form">
      <p className='p-5'>Total Data: {informations.length}</p>
      <div class="form-control ep">
          <form>
      <select type="text"
                class=" ep-input p-1"
                {...register("dropdown")}>
        <option disabled selected>
          Pick your favorite Simpson
        </option>
      
             {
                    informations.map(information => <option
                        key={information._id}
                        information={information}
                    >{information.name}</option>)
                }
         
                
          </select>
          <br />
          <input className="btn ml-10 bg-blue-700 text-white mt-5" type="submit" value="Search" />
          </form>

      </div>
    </div>
    </div>
  );
};

export default Informations;