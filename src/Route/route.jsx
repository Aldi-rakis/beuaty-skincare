import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DetailFacial from "../pages/DetailFacialWash";
import DetailDayCream from "../pages/DetailDayCream";

import Contact from "../pages/Contact";



export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
      <Route path="/facialwash" element={<DetailFacial />} />

      <Route path="/daycream" element={<DetailDayCream />} />


      <Route path="/resseler" element={<Contact />} />
      <Route path="*" element={<h1>404 - Not Found</h1>} />
    </Routes>
  );
}
