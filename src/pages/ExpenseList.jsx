import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteExpenses } from "../features/expenses/expensesSlice";
import { useDispatch } from "react-redux";

function ExpenseList({ allExpenses, editExpenceDetails }) {
  const dispatch = useDispatch();
  const sortedExpenses = [...allExpenses].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  let totalExpenses = 0;
  sortedExpenses.forEach((expense) => {
    totalExpenses += Number(expense.amount);
  });

  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
        Expense List
      </h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {sortedExpenses.length === 0 ? (
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
                    <th className="px-4 py-2 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedExpenses.map((expense) => (
                    <tr key={expense.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2">{expense.id}</td>
                      <td className="px-4 py-2">{expense.title}</td>
                      <td className="px-4 py-2">₹{expense.amount}</td>
                      <td className="px-4 py-2">{expense.date}</td>
                      <td className="px-4 py-2 text-center">
                        {expense.category}
                      </td>
                      <td className="px-4 py-2 text-center">
                        <div className="space-x-2">
                          <button
                            onClick={() => editExpenceDetails(expense)}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => dispatch(deleteExpenses(expense.id))}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <hr />
            <div className="p-4 text-right font-bold">
              Total Expenses: ₹{totalExpenses}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ExpenseList;
