import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpence, editExpenceData } from "../features/expenses/expensesSlice";

function ExpenseForm({ editExpence, setEditExpence }) {
  const allCategories = useSelector((state) => state.categories);
  const allExpenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (editExpence) {
      setFormData(editExpence);
    }
  }, [editExpence]);

  const handleSubmitExpence = () => {
    if(editExpence.id){
        dispatch(editExpenceData(formData))
    }else{
        formData.id = Math.floor(Math.random() * 1000);
        dispatch(addExpence(formData));
    }
    let emptyForm = {};
    for (let key in formData) {
      emptyForm[key] = "";
    }
    setFormData(emptyForm);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="p-4 bg-white shadow-lg rounded-lg space-y-4">
      <h2 className="text-2xl font-bold">Add Expense</h2>
      <hr />

      <div>
        <label className="block font-semibold">Title</label>
        <input
          type="text"
          required
          name="title"
          value={formData?.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block font-semibold">Amount ( ₹ )</label>
        <input
          type="number"
          name="amount"
          value={formData?.amount}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block font-semibold">Date</label>
        <input
          type="date"
          name="date"
          value={formData?.date}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block font-semibold">Category</label>
        <select
          name="category"
          value={formData?.category}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="" disabled>
            Select Category
          </option>
          {allCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        className="w-full bg-cyan-900 text-white p-2 rounded-md"
        onClick={handleSubmitExpence}
      >
        Add Expense
        {/* {editExpence ? "Update Expense" : "Add Expense"} */}
      </button>
    </form>
  );
}

export default ExpenseForm;
