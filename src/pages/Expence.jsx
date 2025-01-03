import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm.jsx";
import ExpenseList from "./ExpenseList.jsx";
import withLayout from "../components/HOC/HOC";
import { useSelector } from "react-redux";
import ExpenseChart from "../components/ExpenseChart.jsx";

function Expence() {
  const allExpenses = useSelector((state) => state.expenses);
  const [editExpence, setEditExpence] = useState({});

  const editExpenceDetails = (expense) => {
    setEditExpence(expense);
  };

  return (
    <div className="container">
      <ExpenseForm editExpence={editExpence} setEditExpence={setEditExpence} />
      <ExpenseList
        allExpenses={allExpenses}
        editExpenceDetails={editExpenceDetails}
      />
    </div>
  );
}

export default withLayout(Expence);
