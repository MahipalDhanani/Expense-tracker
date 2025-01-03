import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const storedCategories = localStorage.getItem("categories");
  return storedCategories ? JSON.parse(storedCategories) : [];
};

const saveToLocalStorage = (categories) => {
  localStorage.setItem("categories", JSON.stringify(categories));
};

const categorySlice = createSlice({
  name: "categories",
  initialState: loadFromLocalStorage(),
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
      saveToLocalStorage(state);
    },
    deleteCategory: (state, action) => {
      const filteredCategories = state.filter((category) => category !== action.payload);
      saveToLocalStorage(filteredCategories); 
      return filteredCategories; 
    },
  },
});

export const { addCategory, deleteCategory } = categorySlice.actions;
export default categorySlice.reducer;
