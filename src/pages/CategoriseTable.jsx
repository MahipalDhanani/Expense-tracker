import React, { useState } from "react";
import { useSelector } from "react-redux";

function CategoriseTable({allCategories,allExpenses}) {
  const [activeCategory, setActiveCategory] = useState("All");


  let totalExpenses = 0;
  allExpenses.forEach(
    (expense) =>
      (activeCategory === "All" || activeCategory === expense.category) &&
      (totalExpenses += Number(expense.amount))
  );

  return (
    <>
      <h1 className="text-3xl font-bold text-cyan-900 text-center py-4">
        Show Expense by Category
      </h1>
      <div className="flex flex-wrap justify-center gap-6 bg-cyan-900 rounded-lg shadow-lg mb-8">
        <button
              className={"text-white p-4 " + (activeCategory === 'All' && "bg-cyan-700") }
              onClick={() => setActiveCategory("All")}
        >
          All
        </button>
        {allCategories.map((category) => {
          return (
            <button
              key={category}
              className={"text-white p-4 " + (activeCategory === category && "bg-cyan-700") }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {allExpenses.length === 0 ? (
          <p className="text-center p-4">No expenses added yet.</p>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Id</th>
                    <th className="px-4 py-2 text-left">Title</th>
                    <th className="px-4 py-2 text-left">Amount</th>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-center">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {allExpenses.map(
                    (expense) =>
                      (activeCategory === "All" ||
                        activeCategory === expense.category) && (
                        <tr key={expense.id} className="hover:bg-gray-50">
                          <td className="px-4 py-2">{expense.id}</td>
                          <td className="px-4 py-2">{expense.title}</td>
                          <td className="px-4 py-2">₹{expense.amount}</td>
                          <td className="px-4 py-2">{expense.date}</td>
                          <td className="px-4 py-2 text-center">
                            {expense.category}
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            </div>
            <hr />
            <div className="p-4 text-right font-bold text-cyan-900">
              Total Expenses: ₹{totalExpenses}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CategoriseTable;
