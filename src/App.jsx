import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Catagory from "./pages/Category";
import Expence from "./pages/Expence";
import Summary from "./pages/Summary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Catagory />} />
        <Route path="/expence" element={<Expence />} />
        <Route path="/summary" element={<Summary />} />
        <Route
          path="/*"
          element={
            <h1
              className="flex justify-center items-center h-[100vh] text-5xl bg-cyan-900 text-white"
              style={{ textShadow: "6px 6px 4px #000" }}
            >
              Page Not Found
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
