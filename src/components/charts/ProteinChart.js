import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ProteinChart({ data }) {
  if (!data || data.length === 0) {
    console.log('No protein data available');
    return <div>No data available</div>;
  }

  const chartData = {
    labels: data.map(item => new Date(item.timestamp).toLocaleDateString()),
    datasets: [
      {
        label: 'Daily Protein Intake (g)',
        data: data.map(item => item.proteinIntake),
        fill: false,
        borderColor: 'rgb(153, 102, 255)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Protein Intake History'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Grams (g)'
        }
      }
    }
  };

  return <Line data={chartData} options={options} />;
}
