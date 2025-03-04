import { ProteinChart, CalorieChart } from './charts/CalorieChart';

function YourParentComponent() {
  const [data, setData] = useState([]);

  // Example data structure
  const sampleData = [
    {
      timestamp: new Date(),
      proteinIntake: 50,
      calories: 2000
    }
  ];

  return (
    <div>
      <ProteinChart data={sampleData} />
      <CalorieChart data={sampleData} />
    </div>
  );
}
