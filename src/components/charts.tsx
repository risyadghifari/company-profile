"use client"

import { Bar, Doughnut, Pie } from 'react-chartjs-2';

const BarChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Products Sold',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: '#3b82f6',
      },
    ],
  };

  return <Bar data={data} />;
};

const DonutChart = () => {
  const data = {
    labels: ['Electronics', 'Games', 'Furniture'],
    datasets: [
      {
        data: [2487, 1823, 1463],
        backgroundColor: ['#6366f1', '#10b981', '#f43f5e'],
      },
    ],
  };

  

  return <Doughnut data={data} />;
};


const PieChart = () => {
    const data = {
      labels: ['Electronics', 'Games', 'Furniture'],
      datasets: [
        {
          data: [2487, 1823, 1463],
          backgroundColor: ['#6366f1', '#10b981', '#f43f5e'],
        },
      ],
    };
  
    
  
    return <Pie data={data} />;
  };
export default { BarChart, DonutChart, PieChart };
