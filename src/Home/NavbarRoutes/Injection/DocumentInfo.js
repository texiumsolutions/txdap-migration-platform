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
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Hire Date</th>
                        <th>Job ID</th>
                        <th>Salary</th>
                        <th>Commission PCT</th>
                        <th>Manager ID</th>
                        <th>Department ID</th>
                    </tr>
                </thead>
                <tbody>
                    {targetKey.map(tkey => (
                        <tr>
                            <td>{tkey.employee_id}</td>
                            <td>{tkey.first_name}</td>
                            <td>{tkey.last_name}</td>
                            <td>{tkey.email}</td>
                            <td>{tkey.phone_number}</td>
                            <td>{tkey.hire_date}</td>
                            <td>{tkey.job_id}</td>
                            <td>{tkey.salary}</td>
                            <td>{tkey.commission_pct}</td>
                            <td>{tkey.manager_id}</td>
                            <td>{tkey.department_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DocumentInfo;