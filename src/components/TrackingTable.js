import React from 'react';

export default function TrackingTable() {
    return (
        <div className="overflow-x-auto rounded-lg">
            <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>BMI</th>
                            <th>Chage</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                        </tr>
                        {/* row 3 */}
                        </tbody>
                    </table>
        </div>            
    );
}