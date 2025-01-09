//COPILOT GENERATED

"use client"

import React, { useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import { useUser } from '@clerk/clerk-react'

const ProteinCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [unit, setUnit] = useState('metric');
  const [proteinIntake, setProteinIntake] = useState('');

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const { isLoaded, user } = useUser()

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

  const uploadProteinIntake = async () => {
    const timestamp = new Date().toISOString();
    const { data, error } = await supabase
      .from('proteintracking')
      .insert([
        { 
          proteinIntake, 
          activityLevel, 
          username: user.username, 
          timestamp 
        }
      ]);

    if (error) {
      console.error('Error uploading protein intake:', error);
    } else {
      console.log('Protein intake uploaded successfully:', data);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center border-4 rounded-xl px-4 py-4">
      <label className="text-2xl">
        <select
          className="select select-bordered border-2 text-secondary text-lg lg:text-2xl w-full max-w-xs"
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
      <label className="input max-w-[200px] lg:max-w-[300px] input-bordered py-4 text-secondary flex border-2 items-center gap-2">
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      </label>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
      <label className="input max-w-[300px] input-bordered py-4 text-secondary flex border-2 items-center gap-2">
      <input
        type="number"
        placeholder={unit === 'metric' ? 'Weight (kg)' : 'Weight (lbs)'}
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      </label>
      <label className="input max-w-[300px] input-bordered py-4 text-secondary flex border-2 items-center gap-2">
      <input
        type="number"
        placeholder={unit === 'metric' ? 'Height (cm)' : 'Height (inches)'}
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      </label>
      </div>
      <label>
      <label className="text-lg text-secondary">Activity Level:</label>
      <select
        className="select text-lg select-bordered text-secondary border-2 w-full max-w-xs"
        value={activityLevel}
        onChange={(e) => setActivityLevel(e.target.value)}
      >
        <option value="sedentary">Sedentary</option>
        <option value="lightly_active">Lightly Active</option>
        <option value="moderately_active">Moderately Active</option>
        <option value="very_active">Very Active</option>
        <option value="super_active">Super Active</option>
        <option value="athlete">Athlete</option>
      </select>
      </label>
      <button className="btn btn-secondary text-2xl" onClick={calculateProtein}>Calculate</button>
      {proteinIntake && 
      <div>
      <p className="text-2xl">Recommended daily protein intake: 
      <br /> 
      <span className="font-bold">{proteinIntake}</span> grams.</p>
      {user &&
            <button className="btn btn-accent text-white text-2xl" onClick={uploadProteinIntake}>Save BMI Calculation</button>
          }
      </div>}
    </div>
  );
};

export default ProteinCalculator;
