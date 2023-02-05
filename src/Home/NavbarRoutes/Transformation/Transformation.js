import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
import useInformation from '../../../hooks/useInformation';
import Home from '../../Home';

const Transformation = () => {
    const [informations] = useInformation();
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch("http://localhost:5000/run", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          toast.success("Added New Product Successfully");

          reset();
        } else {
          toast.error("Failed add to the data");
        }
      });
  };
    return (
        <div>
            <Home></Home>
            <p className="text-2xl p-6">Action Mapping </p>
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
        
      <tr>
        <th>Source Key</th>
        <th>Target Key</th>
        <th>Data Type</th>
      </tr>
    </thead>
    <tbody style={{
        border: "1px solid black",
    }}>   
      
      <td className='px-20'>
      {informations.map((information) => (
                  <label className="label justify-start" key={information._id} information={information}>
                    {information.name}
                    </label>
                ))}
      </td>   
      <td>
      {informations.map((information) => (
                  <label className="label justify-start" key={information._id} information={information}>
                    <input 
                    style={{
                        border: "1px solid black",
                    }}
                type="text"
                placeholder="Update here"
                required
              />
                    </label>
                ))}
      </td>     
    </tbody>
  </table>
</div>
    </div>
    );
};

export default Transformation;