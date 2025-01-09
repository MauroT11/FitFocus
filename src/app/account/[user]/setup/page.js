"use client"

import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react'

export default function Page() {

    const { user } = useUser()
    console.log(user)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Fitness Goals:', goals);
        // Add your form submission logic here
    };

    return (
        <div>
            <div className="min-h-[10rem] lg:min-h-[20rem] relative bg-cover bg-center min-w-full items-center flex flex-col  justify-center text-white " style={{ backgroundImage: "url('/images/fittracking.jpg')" }}>
                <h1 className="text-4xl lg:text-8xl font-bold tracking-wider text-shadow-header">Welcome to FitFocus</h1>
            </div>
            <div className="flex flex-col gap-8 items-center py-8 min-h-full">
                <h2 className="text-3xl font-bold">How to use FitFocus</h2>
                <p className="text-lg">First utilise our calculators to find out your biometrics to know how you have started your fitness journey</p>
                <div className="flex gap-8">
                    <a href="/calculators/calorie" className="btn glass px-4 py-2 rounded-lg bg-accent text-2xl hover:bg-red-500 text-white">Daily Calorie Intake</a>
                    <a href="/calculators/bmi" className="btn glass px-4 py-2 rounded-lg bg-accent text-2xl hover:bg-red-500 text-white">Body Mass Index</a>
                    <a href="/calculators/protein" className="btn glass px-4 py-2 rounded-lg bg-accent text-2xl hover:bg-red-500 text-white">Protein Intake</a>
                </div>
            </div>
        </div>
    );
}