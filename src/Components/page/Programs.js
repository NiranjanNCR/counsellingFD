import React from "react";
import { Routes, Route } from "react-router-dom";
import Disc from "../Disc";

const Programs = () => {
  return (
    <Routes>
      <Route path="disc" element={<Disc />} />
      <Route path="myers-briggs" element={<div>Myers-Briggs Program</div>} />
      <Route path="personality-factor" element={<div>Personality Factor Questionnaire</div>} />
      <Route path="eysenck" element={<div>Eysenck Personality Inventory</div>} />
      <Route path="enneagram" element={<div>Enneagram Test</div>} />
      <Route path="caliper" element={<div>Caliper</div>} />
      <Route path="minnesota" element={<div>Minnesota Multiphasic Personality Inventory</div>} />
    </Routes>
  );
};

export default Programs;
