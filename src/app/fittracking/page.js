"use client"

import React, { useEffect, useState } from 'react';
import TrackingTable from '@/components/TrackingTable';

export default function Page() {

    // useEffect(() => {
    //     const getData = async () => {
    //         const result = await fetchData();
    //         setData(result);
    //     };
    //     getData();
    // }, []);

    return (
        <div>
            <div className="min-h-[10rem] lg:min-h-[20rem] relative bg-cover bg-center min-w-full items-center flex flex-col  justify-center text-white " style={{ backgroundImage: "url('/images/fittracking.jpg')" }}>
                <h1 className="text-4xl lg:text-8xl font-bold tracking-wider text-shadow-header">FitTracking</h1>
            </div>
            <div className="flex flex-col gap-4 lg:px-0 py-4 items-center text-center ">
                <h2 className="text-2xl font-bold">Why should you keep track of your biometrics?</h2>
                <p className="max-w-[70rem] px-2 text-sm lg:text-lg">Keeping track of your biometrics is crucial for maintaining overall health and wellness, as it provides valuable insights into your body's unique patterns and changes. Regular biometric monitoring can help detect early signs of potential health issues, allowing for timely intervention and better management of your well-being.</p>
            </div>
            <div className="flex flex-col gap-8 items-center py-8">
                <div className="stats stats-vertical lg:stats-horizontal shadow">
                    <div className="stat">
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 px-8 py-8 gap-4">
                <div className="border-2 rounded-lg">
                    <div className="flex justify-center">
                        <h2 className="text-2xl tracking-widest font-bold">BMI</h2>
                    </div>
                    <TrackingTable />
                </div>
                <div className="border-2 rounded-lg">
                    <div className="flex justify-center">
                        <h2 className="text-2xl tracking-widest font-bold">BMI</h2>
                    </div>
                    <TrackingTable />
                </div>
                <div className="border-2 rounded-lg">
                    <div className="flex justify-center">
                        <h2 className="text-2xl tracking-widest font-bold">BMI</h2>
                    </div>
                    <TrackingTable />
                </div>
            </div>
        </div>
    );
}