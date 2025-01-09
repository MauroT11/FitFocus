import React from 'react';

export default function ProteinTracking({Protein}) {

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toISOString().split('T')[0]; // Returns 'YYYY-MM-DD'
    };

    return (
        <div className="border-2 rounded-lg">
        <div className="flex justify-center">
                        <h2 className="text-2xl tracking-widest font-bold">Protein</h2>
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
                        {Protein.map((protein) => (
                            <tr key={protein.id}>
                                <td>{formatDate(protein.timestamp)}</td>
                                <td>{protein.proteinIntake}</td>
                                <td>{protein.activityLevel}</td>
                                </tr>
                        ))}
                        </tbody>
                    </table>
        </div>      
      </div>        
    );
}