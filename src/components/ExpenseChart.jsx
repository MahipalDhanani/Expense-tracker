import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  RadialLinearScale,
} from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  RadialLinearScale
);

const ExpenseChart = () => {
  const allCategories = useSelector((state) => state.categories);
  const allExpenses = useSelector((state) => state.expenses);

  const categoryExpenseData = allCategories.map((category) => {
    let totalExpense = 0;
    allExpenses.forEach((expense) => {
      if (expense.category === category) {
        totalExpense += Number(expense.amount);
      }
    });
    return totalExpense;
  });
  

  const data = {
    labels: allCategories,
    datasets: [
      {
        label: "My Expenses",
        data: categoryExpenseData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ], 
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ], 
        borderWidth: 1,
        hoverBackgroundColor: "rgb(255, 99, 132)",
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="w-[400px] h-[auto] border border-gray-300 rounded-md shadow-md p-4">
      <PolarArea data={data} options={options} />
      <h1 className="pt-2 text-center font-bold text-cyan-900">Expenses by Category</h1>
    </div>
  );
};

export default ExpenseChart;
