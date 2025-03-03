// CO-PILOT AI

import { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [unit, setUnit] = useState('metric');
  const [bmi, setBMI] = useState(null);

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
      {bmi && <h3 className="text-3xl">Your BMI is: <br /><span className="font-bold">{bmi}</span></h3>}
    </div>
  );
};

export default BMICalculator;
