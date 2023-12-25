import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
//Pages
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
        <Route path="/" element={<Home imageDetails={imageDetails} />} />
        <Route
          path="/designs"
          element={<Designer imageDetails={imageDetails} />}
        />
        <Route
          path="/development"
          element={<Developer imageDetails={imageDetails} />}
        />
      </Routes>
    </AnimatePresence>
  );
};
export default AnimatedRoutes;
