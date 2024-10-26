"use client"

import React, { useState } from 'react';

const ProteinCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [unit, setUnit] = useState('metric');
  const [proteinIntake, setProteinIntake] = useState('');

  const calculateProtein = () => {
    const activityMultiplier = {
      'sedentary': 0.8,
      'lightly_active': 1.0,
      'moderately_active': 1.2,
      'very_active': 1.4,
      'super_active': 1.6,
      'athlete': 1.8,
    };

    const genderMultiplier = gender === 'male' ? 1.2 : 1.0;
    const ageAdjustment = age > 50 ? 1.1 : 1.0;
    
    // Convert weight and height to metric if necessary
    const weightInKg = unit === 'imperial' ? weight * 0.453592 : weight;
    const heightInCm = unit === 'imperial' ? height * 2.54 : height;
    
    const protein = weightInKg * activityMultiplier[activityLevel] * genderMultiplier * ageAdjustment;
    setProteinIntake(protein.toFixed(2));
  };

  return (
    <div className="flex flex-col gap-4 items-center border-4 rounded-xl px-8 py-4">
        <label className="text-2xl">
            <select
            className="select select-bordered text-2xl w-full max-w-xs"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            >
                <option value="metric">Metric (kg, cm)</option>
                <option value="imperial">Imperial (lbs, inches)</option>
            </select>
        </label>
        <div className="flex gap-4">
        <label>
            <select
                className="select text-lg select-bordered text-secondary border-2 w-full max-w-xs"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
            >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      </label>
      <label className="input max-w-[300px] input-bordered py-4 text-secondary flex border-2 items-center gap-2">
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      </label>
      </div>
      <div className="flex gap-4">
      <label className="input max-w-[300px] input-bordered py-4 text-secondary flex border-2 items-center gap-2">
      <input
        type="number"
        placeholder={unit === 'metric' ? 'Enter your weight (kg)' : 'Enter your weight (lbs)'}
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      </label>
      <label className="input max-w-[300px] input-bordered py-4 text-secondary flex border-2 items-center gap-2">
      <input
        type="number"
        placeholder={unit === 'metric' ? 'Enter your height (cm)' : 'Enter your height (inches)'}
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      </label>
      </div>
      <label>
      <select
        className="select text-lg select-bordered text-secondary border-2 w-full max-w-xs"
        value={activityLevel}
        onChange={(e) => setActivityLevel(e.target.value)}
      >
        <option>Choose Activity level</option>
        <option value="sedentary">Sedentary</option>
        <option value="lightly_active">Lightly Active</option>
        <option value="moderately_active">Moderately Active</option>
        <option value="very_active">Very Active</option>
        <option value="super_active">Super Active</option>
        <option value="athlete">Athlete</option>
      </select>
      </label>
      <button className="btn btn-secondary text-2xl" onClick={calculateProtein}>Calculate</button>
      {proteinIntake && <p className="text-2xl">Your recommended daily protein intake is: <br /> <span className="font-bold">{proteinIntake}</span> grams.</p>}
    </div>
  );
};

export default ProteinCalculator;
