import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const storedEpenses = localStorage.getItem("expenses");
  return storedEpenses ? JSON.parse(storedEpenses) : [];
};

const saveToLocalStorage = (expenses) => {
  localStorage.setItem("expenses", JSON.stringify(expenses));
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState: loadFromLocalStorage(),
  reducers: {
    addExpence: (state, action) => {
      state.push(action.payload);
      saveToLocalStorage(state);
    },
    editExpenceData: (state, action) => {
      let updated=state.findIndex((data) => data.id == action.payload.id);
      state.splice(updated, 1, action.payload)
      saveToLocalStorage(state);
    },
    deleteExpenses: (state, action) => {
      const filteredEpenses = state.filter(
        (expenses) => expenses.id !== action.payload
      );
      saveToLocalStorage(filteredEpenses);
      return filteredEpenses;
    },
  },
});

export const { addExpence, deleteExpenses, editExpenceData } =
  expensesSlice.actions;
export default expensesSlice.reducer;
