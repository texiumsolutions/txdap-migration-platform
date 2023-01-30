import React from 'react';
import UseInformation from '../../../Hooks/useInformation';
import { useForm } from "react-hook-form";
import './Extraction.css';
import Progressbar2 from './ProgressBar/Progressbar2';
import Extraction from './Extraction';

const Informations = () => {
  const [informations] = UseInformation();
  
  const { register} = useForm();
 
  
  return (
    <div>
      <Extraction></Extraction>
      <div className=''>
      <p className="text-2xl">Run profile </p>
      <p className='p-5'>Total Data: {informations.length}</p>
      <div className=" bg-base-600 ep-formI">
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
          {/* <input className="btn ml-10 bg-blue-700 text-white mt-5" type="submit" value="Search" /> */}
          </form>

      </div>
    </div>
    </div>
    <Progressbar2></Progressbar2>
    </div>
  );
};

export default Informations;