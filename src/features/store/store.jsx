import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../category/categorySlice'; 
import expensesSlice from '../expenses/expensesSlice'; 

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    expenses: expensesSlice,
  },
});
