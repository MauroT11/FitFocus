import React from 'react';

export default function BMITracking({BMI}) {

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toISOString().split('T')[0]; // Returns 'YYYY-MM-DD'
      };

    return (
        <div className="border-2 rounded-lg">
        <div className="flex justify-center">
                        <h2 className="text-2xl tracking-widest font-bold">BMI</h2>
                    </div>
        <div className="overflow-x-auto rounded-lg">
            <table className="table">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>BMI Score</th>
                            <th>Class</th>
                        </tr>
                        </thead>
                        <tbody>
                        {BMI.map((bmi) => (
                            <tr key={bmi.id}>
                                <td>{formatDate(bmi.timestamp)}</td>
                                <td>{bmi.bmi}</td>
                                <td>{bmi.category}</td>
                                </tr>
                        ))}
                        </tbody>
                    </table>
        </div>      
      </div>        
    );
}