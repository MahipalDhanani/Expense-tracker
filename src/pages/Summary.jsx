import React, { useState } from "react";
import {
  FaAppleAlt,
  FaMedkit,
  FaHome,
  FaCar,
  FaEdit,
  FaTrash,
} from "react-icons/fa"; // Import icons
import withLayout from "../components/HOC/HOC";
import ExpenseChart from "../components/ExpenseChart";
import { useSelector } from "react-redux";
import CategoriseTable from "./CategoriseTable";

function Summary() {
  const allCategories = useSelector((state) => state.categories);
  const allExpenses = useSelector((state) => state.expenses);
  const [activeCategory, setActiveCategory] = useState("All");

  const categoryExpenseData = allCategories.map((category) => {
    let totalExpense = 0;
    allExpenses.forEach((expense) => {
      if (expense.category === category) {
        totalExpense += Number(expense.amount);
      }
    });
    return totalExpense;
  });

  let data = [];
  for (let i = 0; i < allCategories.length; i++) {
    data.push({
      name: allCategories[i],
      value: categoryExpenseData[i],
    });
  }

  let totalExpenses = 0;
  allExpenses.forEach((expense) => {
    totalExpenses += Number(expense.amount);
  });
  return (
    <>
      <div className="py-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-cyan-900">Expense Summary</h1>
          <p className="text-lg text-cyan-600">
            Overview of your expenses by category
          </p>
        </div>
        <div className="flex justify-center py-5">
          <ExpenseChart />
        </div>

        {/* Expense Cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {data.map((category, index) => {
            return (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-between w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <div className="flex items-center gap-2 ">
                  <h2 className="text-xl font-semibold">{category.name}</h2>
                  <div>
                    <p className="text-xl font-semibold text-gray-800">
                      ₹{category.value}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <CategoriseTable allCategories={allCategories} allExpenses={allExpenses} />
    </>
  );
}

export default withLayout(Summary);
