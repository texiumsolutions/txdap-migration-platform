import React from 'react';
import useTargetKey from '../../../hooks/useTargetKey';
import '././Progress.css';
import './DocumentInfo.css';

const DocumentInfo = () => {
    const [targetKey] = useTargetKey();
    console.log(targetKey)

    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th className='pl-10'>Source Key</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td className='pl-10'></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DocumentInfo;