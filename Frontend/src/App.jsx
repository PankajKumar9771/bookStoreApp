import React from "react";
import Home from "./home/Home";
import Courses from "./components/courses/Courses";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/signUp" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
