import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import MainScreen from "./screens/MainScreen";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<HomeScreen />} />
        <Route exact path="/main" element={<MainScreen/>} />
        <Route index path="/app1" element={<></>} />
        <Route index path="/app2" element={<></>} />
        <Route index path="/app3" element={<></>} />
      </Routes>
    </>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
// import React from 'react'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import HomeScreen from './Screens/HomeScreen';

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <HomeScreen/>,
//     },
//   ]);
//   let currentDiagnosis
//   function fileChangeHandler(diagnosis){
//     currentDiagnosis = diagnosis
//   }
//   // console.log(browserHistory)
//   return (

//     <div className="App">
//        <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;
