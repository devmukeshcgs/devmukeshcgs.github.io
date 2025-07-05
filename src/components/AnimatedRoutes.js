import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/home";
import Model from "../pages/model";
import Designer from "../pages/designer";
import Developer from "../pages/developer";

const AnimatedRoutes = () => {
  const location = useLocation();
  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home imageDetails={imageDetails} />} />
        <Route path="/model/:id" element={<Model imageDetails={imageDetails} />} />
        <Route path="/designs" element={<Designer imageDetails={imageDetails} />} />
        <Route path="/development" element={<Developer imageDetails={imageDetails} />} />
        
        {/* Optional: Add a catch-all route for 404s */}
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;