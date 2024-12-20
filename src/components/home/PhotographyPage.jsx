import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Photography from "./components/home/Photography";

const PhotographyPage = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Photography />} />
        {/* Add additional routes for the photography section if needed */}
      </Routes>
    </HashRouter>
  );
};

export default PhotographyPage;
