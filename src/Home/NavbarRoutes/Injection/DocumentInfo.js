import axios from 'axios';
import React, { useState } from 'react';
import useTargetKey from '../../../hooks/useTargetKey';
import '././Progress.css';
import './DocumentInfo.css';
const DocumentInfo = () => {
    const [targetKey] = useTargetKey();
    console.log(targetKey);
    const [userData, setUserData] = useState([]);
    const [delmessage, setDelmessage] = useState('');

    // for (var i = 0; i <= targetKey.length; i++) {
    //     var number = targetKey[i];
    //     console.log(number);
    // }
    const handleChange = () => {
        alert('Hello');
        // const { name, checked } = e.target;
        //     // if (name === "allselect") {
        //     //     const checkedvalue = userData.map((user) => {
        //     //         return { ...user, isChecked: checked };
        //     //     });
        //     //     console.log(checkedvalue);
        //     //     setUserData(checkedvalue);
        //     // } else {
        //     //     const checkedvalue = userData.map((user) =>
        //     //         user.name === name ? { ...user, isChecked: checked } : user
        //     //     );
        //     //     console.log(checkedvalue);
        //     //     setUserData(checkedvalue);
        // }
    };

    const handlealldelete = async () => {
        const checkedInputValue = [];
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].isChecked === true) {
                checkedInputValue.push(parseInt(userData[i]._id));
            }
        }
        const responce = await axios.post(`http://localhost:5000/updateRun`, JSON.stringify(checkedInputValue));
        setDelmessage(responce.data.msg);
    };

    return (
        <div>
            <button
                className="btn btn-primary m-8"
                onClick={() => {
                    handlealldelete();
                }}
            >
                Run
            </button>
            <h1>{delmessage}</h1>
            <div className="overflow-x-auto pl-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox text-xl"
                                        name="allselect"
                                        checked={
                                            !userData.some((user) => user?.isChecked === false)
                                        }
                                        onChange={handleChange}
                                    />{" "}
                                </label>
                            </th>
                            <th>Index</th>
                            <th>Name</th>
                            <th>File Type</th>
                            <th>Description</th>
                            <th>Input1</th>
                            <th>Input2</th>
                            <th>Input3</th>
                            <th>Input4</th>
                            <th>Input5</th>
                            <th>Input6</th>
                            <th>Input7</th>
                            <th>Input8</th>
                            <th>Input9</th>
                            <th>Input10</th>
                            <th>Input11</th>
                            <th>Input12</th>
                            <th>Input13</th>
                            <th>Input14</th>
                            <th>Input15</th>
                            <th>Target Type</th>
                            <th>Target Description</th>
                            <th>Target Input6</th>
                            <th>Target Input7</th>
                        </tr>
                    </thead>
                    <tbody>
                        {targetKey.map((tkey, index) => (
                            <tr key={index}>
                                <th>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            name={tkey.name}
                                            checked={tkey?.isChecked || false}
                                            onChange={handleChange}
                                        />
                                    </label>
                                </th>
                                <td>{index + 1}</td>
                                <td>{tkey.name}</td>
                                <td>{tkey.type}</td>
                                <td>{tkey.description}</td>
                                <td>{tkey.input1}</td>
                                <td>{tkey.input2}</td>
                                <td>{tkey.input3}</td>
                                <td>{tkey.input4}</td>
                                <td>{tkey.input5}</td>
                                <td>{tkey.input6}</td>
                                <td>{tkey.input7}</td>
                                <td>{tkey.input8}</td>
                                <td>{tkey.input9}</td>
                                <td>{tkey.input10}</td>
                                <td>{tkey.input11}</td>
                                <td>{tkey.input12}</td>
                                <td>{tkey.input13}</td>
                                <td>{tkey.input14}</td>
                                <td>{tkey.input15}</td>
                                <td>{tkey.target_type}</td>
                                <td>{tkey.target_description}</td>
                                <td>{tkey.target_input6}</td>
                                <td>{tkey.target_input7}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DocumentInfo;