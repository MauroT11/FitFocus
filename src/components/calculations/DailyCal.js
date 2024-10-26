import { useState } from 'react';

const CalorieCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [gender, setGender] = useState('male');
  const [unit, setUnit] = useState('metric');
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    let weightInKg = parseFloat(weight);
    let heightInCm = parseFloat(height);
    if (unit === 'imperial') {
      weightInKg = weightInKg * 0.453592;
      heightInCm = heightInCm * 2.54;
    }

    let bmr;
    if (gender === 'male') {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * parseFloat(age) + 5;
    } else {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * parseFloat(age) - 161;
    }

    const activityFactors = {
      sedentary: 1.2,
      lightly_active: 1.375,
      moderately_active: 1.55,
      very_active: 1.725,
      extra_active: 1.9,
    };

    const dailyCalories = bmr * activityFactors[activityLevel];
    setCalories(dailyCalories.toFixed(2));
  };

  return (
    <div className="flex-col border-4 py-8 px-4 rounded-xl border-zinc-300 flex items-center gap-4">
      <label>
        <select className="select select-bordered text-2xl w-full max-w-xs" value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="metric">Metric (kg/cm)</option>
          <option value="imperial">Imperial (lbs/inches)</option>
        </select>
      </label>
      <div className="flex gap-4">
      <label>
        <select className="select text-lg select-bordered text-secondary border-2 w-full max-w-xs" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
        <label className="input max-w-[300px] input-bordered py-4 text-secondary flex border-2 items-center gap-2">
            <input
                type="number"
                placeholder="Age"
                className="text-md"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
        </label>
      </div>
      <div className="flex gap-4">
      <label className="input max-w-[300px] input-bordered py-4 text-secondary flex border-2 items-center gap-2">
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
      <label>
        Activity Level:
        <select className="select text-lg select-bordered text-secondary border-2 w-full max-w-xs" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
          <option value="sedentary">Sedentary</option>
          <option value="lightly_active">Lightly Active</option>
          <option value="moderately_active">Moderately Active</option>
          <option value="very_active">Very Active</option>
          <option value="extra_active">Extra Active</option>
        </select>
      </label>
      <button className="btn btn-secondary text-2xl" onClick={calculateCalories}>Calculate Daily Calorie Intake</button>
      {calories && <h3 className="text-2xl">Your Daily Calorie Intake is: <br /> <span className="font-bold">{calories} kcal</span></h3>}
    </div>
  );
};

export default CalorieCalculator;