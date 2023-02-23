import React from 'react';
import useTargetKey from '../../../hooks/useTargetKey';
import '././Progress.css';
import './DocumentInfo.css';
const DocumentInfo = () => {
    const [targetKey] = useTargetKey();
    console.log(targetKey);

    // for (var i = 0; i <= targetKey.length; i++) {
    //     var number = targetKey[i];
    //     console.log(number);
    // }


    return (
        <div class="overflow-x-auto pl-10">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* <td>{targetKey?._id}</td>
                        <td>{number?.name}</td>
                        <td>{number?.dataTypeName}</td> */}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DocumentInfo;