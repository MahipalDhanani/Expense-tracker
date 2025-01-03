import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import withLayout from '../components/HOC/HOC';
import { addCategory, deleteCategory } from '../features/category/categorySlice';
import { MdDeleteForever } from 'react-icons/md';

const Category = () => {
  const [categoryName, setCategoryName] = useState('');
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (categoryName.trim() !== '') {
      dispatch(addCategory(categoryName));
      setCategoryName('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-6">
      {/* Page Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Manage Categories</h1>
        <p className="text-gray-600 mt-2">
          Add new categories and view your existing ones.
        </p>
      </header>

      {/* Add Category Form */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Add New Category
        </h2>
        <form onSubmit={handleAddCategory} className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter category name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Add Category
          </button>
        </form>
      </section>

      {/* Category List */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Existing Categories
        </h2>
        {categories.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex justify-between items-center"
              >
                <span className="text-gray-700 font-medium">{category}</span>
                <button className="font-medium btn text-2xl text-red-500 rounded-md" onClick={()=>dispatch(deleteCategory(category))}><MdDeleteForever /></button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No categories added yet.</p>
        )}
      </section>
    </div>
  );
};

export default withLayout(Category);
