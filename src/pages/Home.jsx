import React from "react";
import withLayout from "../components/HOC/HOC";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold text-cyan-900 md:text-5xl">
          Welcome to Expense Tracker
        </h1>
        <p className="text-lg text-cyan-700 mt-4">
          Take control of your finances with our easy-to-use expense tracker and
          budget management app.
        </p>
      </header>

      {/* Overview Section */}
      <section className="py-8">
        <h2 className="text-3xl font-semibold text-cyan-900 text-center mb-6">
          Why Use Expense Tracker?
        </h2>
        <ul className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
          <li className="bg-gray-100 p-6 rounded-lg shadow-md">
            <strong className="block text-xl text-cyan-900">
              Track Your Spending
            </strong>
            <p className="text-gray-600 mt-2">
              Keep an eye on where your money goes with categorized expenses.
            </p>
          </li>
          <li className="bg-gray-100 p-6 rounded-lg shadow-md">
            <strong className="block text-xl text-cyan-900">Set Budgets</strong>
            <p className="text-gray-600 mt-2">
              Create monthly or category-specific budgets to avoid overspending.
            </p>
          </li>
          <li className="bg-gray-100 p-6 rounded-lg shadow-md">
            <strong className="block text-xl text-cyan-900">
              Visual Insights
            </strong>
            <p className="text-gray-600 mt-2">
              Analyze your expenses with detailed charts and graphs.
            </p>
          </li>
        </ul>
      </section>

      {/* Features Section */}
      <section className="py-8">
        <h2 className="text-3xl font-semibold text-cyan-900 text-center mb-6">
          Key Features
        </h2>
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-cyan-900">
              Expense Management
            </h3>
            <p className="text-gray-600 mt-2">
              Add, edit, and delete expenses with ease. Categorize them to gain
              better insights.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-cyan-900">
              Budget Tracking
            </h3>
            <p className="text-gray-600 mt-2">
              Set limits for different categories and track your spending
              against your budget.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-cyan-900">
              Data Visualization
            </h3>
            <p className="text-gray-600 mt-2">
              Get a clear picture of your financial habits through dynamic
              charts and reports.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-cyan-900">
              Responsive Design
            </h3>
            <p className="text-gray-600 mt-2">
              Access your financial data anytime, anywhere—optimized for mobile
              and desktop.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-8">
        <h2 className="text-3xl font-semibold text-cyan-900 text-center mb-6">
          Get Started
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Follow these simple steps to start managing your finances today:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 max-w-3xl mx-auto">
          <li>Sign up or log in to your account.</li>
          <li>Add your expenses and categorize them.</li>
          <li>Set budgets to keep your spending in check.</li>
          <li>Analyze your data using our charts and reports.</li>
        </ol>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-semibold text-cyan-900">
          Ready to Take Charge of Your Finances?
        </h2>
        <p className="text-gray-600 mt-4">
          Sign up now and start your journey towards financial freedom.
        </p>
        <a
          href="/signup"
          className="inline-block mt-6 bg-cyan-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-cyan-700"
        >
          Get Started
        </a>
      </section>
    </div>
  );
};

export default withLayout(Home);
