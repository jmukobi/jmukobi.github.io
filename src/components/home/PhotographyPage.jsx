import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Photography from "./components/home/Photography";

const PhotographyPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Photography />} />
        {/* Add additional routes for the photography section if needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default PhotographyPage;
