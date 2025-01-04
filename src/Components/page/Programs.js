import React from "react";
import { Routes, Route } from "react-router-dom";
import Prgm1112 from "../Prgm1112";
import Prgm68 from "../Prgm68";
import Prgm910 from "../Prgm910";
import PrgmGraduate from "../PrgmGraduate";

const Programs = () => {
  return (
    <Routes>
      <Route path="program1" element={<Prgm68 />} />
      <Route path="program2" element={<Prgm910/>} />
      <Route path="program3" element={<Prgm1112/>} />
      <Route path="program4" element={<PrgmGraduate/>} />
      {/* <Route path="enneagram" element={<div></div>} />
      <Route path="caliper" element={<div>Caliper</div>} />
      <Route path="minnesota" element={<div>Minnesota Multiphasic Personality Inventory</div>} /> */}
    </Routes>
  );
};

export default Programs;
