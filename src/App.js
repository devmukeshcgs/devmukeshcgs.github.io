// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
// import { Routes ,Route } from 'react-router-dom';

//components
import Header from "./components/header";
//Styles
import "./App.scss";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const imageDetails = {
    width: 524,
    height: 650,
  };

  // return (
  //   <Router>
  //     <Header />
  //     <Route
  //       render={({ location }) => (
  //         <AnimatePresence initial={false} mode="wait">
  //           <Routes location={location} key={location.pathname}>
  //             <Route
  //               exact
  //               path="/"
  //               element={<Home imageDetails={imageDetails} />}
  //               // render={() => <Home imageDetails={imageDetails} />}
  //             />
  //             <Route
  //               exact
  //               path="/model/:id"
  //               element={<Model imageDetails={imageDetails} />}
  //               // render={() => <Model imageDetails={imageDetails} />}
  //             />
  //           </Routes>
  //         </AnimatePresence>
  //       )}
  //     />
  //   </Router>
  // );

  return (
    <BrowserRouter>
      <Header />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
