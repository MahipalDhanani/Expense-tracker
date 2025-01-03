import React from "react";

const Footer = () => {
  return (
    <footer className="bg-cyan-900 text-white">
      <div className="">
        <div className="flex flex-col md:flex-row justify-between items-center container mx-auto">
          <div className="mb-4 md:mb-0">
            <h1 className="text-lg font-bold">Expense Tracker</h1>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Catagory
            </a>
            <a href="#" className="hover:underline">
              Expence
            </a>
          </div>
        </div>
        <div className="text-center py-2 bg-slate-900">
          <p>
            &copy; {new Date().getFullYear()} Expense Tracker. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
