// AttendancePieChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const AttendancePieChart = ({ attendanceData }) => {
  const data = {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        data: [attendanceData.present, attendanceData.total - attendanceData.present],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default AttendancePieChart;