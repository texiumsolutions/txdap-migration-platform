import React from 'react';
import useTargetKey from '../../../hooks/useTargetKey';
import '././Progress.css';
import './DocumentInfo.css';
const DocumentInfo = () => {
    const [targetKey] = useTargetKey();
    console.log(targetKey)

    return (
        <div className="overflow-x-auto pl-10">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{targetKey?.[0]?._id}</td>
                        <td>{targetKey?.[0]?.name}</td>
                        <td>{targetKey?.[0]?.dataTypeName}</td>
                    </tr>
                    <tr>
                        <td>{targetKey?.[1]?._id}</td>
                        <td>{targetKey?.[1]?.name}</td>
                        <td>{targetKey?.[1]?.dataTypeName}</td>
                    </tr>
                    <tr>
                        <td>{targetKey?.[2]?._id}</td>
                        <td>{targetKey?.[2]?.name}</td>
                        <td>{targetKey?.[2]?.dataTypeName}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DocumentInfo;