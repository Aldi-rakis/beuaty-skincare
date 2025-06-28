import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DetailFacial from "../pages/DetailFacialWash";
import DetailDayCream from "../pages/DetailDayCream";



export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
      <Route path="/facial-wash" element={<DetailFacial />} />

      <Route path="/day-cream" element={<DetailDayCream />} />
      <Route path="*" element={<h1>404 - Not Found</h1>} />
    </Routes>
  );
}
