import React from 'react';
// import Chart from 'react-apexcharts';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'd3.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

 const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10,20,30,40,50,60],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [10,20,30,40,50,60],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
const Barchart = () => {
  return (
    <>
      <div className="container-fluid mb-5 ">
        <h3 className="text-center mt-3 mb-3"> Bar Chart </h3>
        <div style={{ width: "1200px", margin: "auto auto" }}>
        <Bar options={options} data={data} />
      </div>
      </div>
    </>
  );
};

export default Barchart;




