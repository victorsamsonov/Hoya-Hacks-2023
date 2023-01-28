import logo from './logo.svg';
import './App.css';
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from './Screens/HomeScreen';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen/>,
    },
  ]);
  let currentDiagnosis
  function fileChangeHandler(diagnosis){
    currentDiagnosis = diagnosis
  }
  // console.log(browserHistory)
  return (
    
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
