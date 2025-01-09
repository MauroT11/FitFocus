import React from 'react';

export default function DailyTracking({Daily}) {

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toISOString().split('T')[0]; // Returns 'YYYY-MM-DD'
    };

    return (
        <div className="border-2 rounded-lg">
        <div className="flex justify-center">
                        <h2 className="text-2xl tracking-widest font-bold">Daily Calorie</h2>
                    </div>
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
                        {Daily.map((daily) => (
                            <tr key={daily.id}>
                                <td>{formatDate(daily.timestamp)}</td>
                                <td>{daily.calories}</td>
                                <td>{daily.activityLevel}</td>
                                </tr>
                        ))}
                        </tbody>
                    </table>
        </div>      
      </div>        
    );
}