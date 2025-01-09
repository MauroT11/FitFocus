// CO-PILOT AI

import { useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import { useUser } from '@clerk/clerk-react'

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [unit, setUnit] = useState('metric');
  const [bmi, setBMI] = useState(null);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const { isLoaded, user } = useUser()

  const calculateBMI = () => {
    let calculatedBMI = 0;
    if (unit === 'metric') {
      const weightInKg = parseFloat(weight);
      const heightInMeters = parseFloat(height) / 100;
      if (weightInKg > 0 && heightInMeters > 0) {
        calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
      }
    } else {
      const weightInLbs = parseFloat(weight);
      const heightInInches = parseFloat(height);
      if (weightInLbs > 0 && heightInInches > 0) {
        calculatedBMI = (weightInLbs / (heightInInches * heightInInches)) * 703;
      }
    }
    setBMI(calculatedBMI.toFixed(2));
  };

  const uploadBMICalculation = async () => {
    const timestamp = new Date().toISOString();
    // console.log('timestamp', timestamp);
    const { data, error } = await supabase
      .from('bmitracking')
      .insert([
        { timestamp, bmi, username : user.username, category: getBMICategory(bmi) }
      ]);

    if (error) {
      console.error('Error uploading BMI calculation:', error);
    } else {
      console.log('BMI calculation uploaded successfully:', data);
    }
};

  const getColorForBMI = (bmi) => {
    if (bmi < 18.5) return 'text-blue-500'; // Underweight
    if (bmi >= 18.5 && bmi < 24.9) return 'text-green-500'; // Normal weight
    if (bmi >= 25 && bmi < 29.9) return 'text-yellow-500'; // Overweight
    return 'text-red-500'; // Obesity
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    return 'Obese';
  };

  return (
    <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-2xl">
            <select className="select select-bordered text-lg text-secondary lg:text-2xl border-2 w-full max-w-xs" value={unit} onChange={(e) => setUnit(e.target.value)}>
              <option value="metric">Metric (kg/cm)</option>
              <option value="imperial">Imperial (lbs/inches)</option>
            </select>
          </label>
        </div>
      <div className="flex flex-col items-center lg:flex-row gap-4">
        <label className="input max-w-[225px] input-bordered py-4 text-secondary flex border-2 items-center gap-2">
            <input
                type="number"
                placeholder={unit === 'metric' ? 'Weight (kg)' : 'Weight (lbs)'}
                value={weight}
                className="text-md"
                onChange={(e) => setWeight(e.target.value)}
            />
        </label>
        <label className="input max-w-[225px] input-bordered py-4 text-secondary flex border-2 items-center gap-2">
            <input
                type="number"
                placeholder={unit === 'metric' ? 'Height (cm)' : 'Height (inches)'}
                value={height}
                className="text-md"
                onChange={(e) => setHeight(e.target.value)}
            />
        </label>
      </div>
      <button className="btn btn-secondary text-2xl" onClick={calculateBMI}>Calculate BMI</button>
      {bmi &&
        <div> 
          <h3 className="text-3xl">Your BMI is: 
          <br />
          <span className={`text-4xl font-bold ${getColorForBMI(bmi)}`}>{bmi}</span>
          <br />
          <span className={`text-2xl font-bold ${getColorForBMI(bmi)}`}>{getBMICategory(bmi)}</span>
          </h3>
          <br />
          {user &&
            <button className="btn btn-accent text-white text-2xl" onClick={uploadBMICalculation}>Save BMI Calculation</button>
          }
        </div>}
    </div>
  );
};

export default BMICalculator;
