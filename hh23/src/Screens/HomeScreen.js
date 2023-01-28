
import './HomeScreen.css';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react"
const HEALTH_IMG = require("../images/cardiogram.png");
const STROKE_IMG = require("../images/stroke.png");
const TUMOR_IMG = require("../images/tumor.png");
const PATIENT_IMG = require("../images/patient.png");
const DOCTOR_IMG = require("../images/doctor.png");
const SEIZURE_IMG = require("../images/epilepsy.png");

function HomeScreen() {
const [data, setData] = useState()

const SERVICE_OBJS_PATIENTS = [
  {
    title: 'Use our tools to determine how likely you are to have a Stroke.',
    img: STROKE_IMG,
  },
];

const SERVICE_OBJS_DOCTORS = [
  {
    title: 'Use EEG data to diagnose a patient. Provides you the capability of diagnosing epileptic seizures',
    img: SEIZURE_IMG,
  },
  {
    title: 'Our breast cancer diagnosis service predicts if a given tumor is malign or benign',
    img: TUMOR_IMG,
  },
];

const loadServices = () => {
  let services = [];
  services.push(
    <li className='HS-service'>
      <text className='HS-service-text'>
        Patients
      </text>
      <img src={PATIENT_IMG} className='HS-service-img'/>
    </li>
    )
  for (let e of SERVICE_OBJS_PATIENTS) {
    services.push(
      <li className='HS-service'>
        <text className='HS-service-text2'>
          {e.title}
        </text>
        <img src={e.img} className='HS-service-img'/>
      </li>
    )
  }
  services.push(
    <li className='HS-service'>
      <text className='HS-service-text'>
        Professionals
      </text>
      <img src={DOCTOR_IMG} className='HS-service-img'/>
    </li>
    )
    for (let e of SERVICE_OBJS_DOCTORS) {
      services.push(
        <li className='HS-service'>
          <text className='HS-service-text2'>
            {e.title}
          </text>
          <img src={e.img} className='HS-service-img'/>
        </li>
      )
    }
  return <>{services}</>
  
};

loadServices()

const fetchData = async () => {
  const response = await fetch("http://localhost:8000/todos")
  const responseJson = await response.json()
  setData(responseJson.data.length)
}

useEffect(()=>{
  fetchData();
}, [])

  return (
    <div className="App">
      <header className="HS-header">
        <div className='HS-row'>
            <h2>
                Lorem Ipsum
            </h2>
            
            <img  src={(HEALTH_IMG)} className="HS-health-img"/>
       </div>
       <p>
           The medical platform for patients and professionals
       </p>
      </header>
      <ul class="box-area">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className='HS-main'>
        <div className='HS-button-container'>
          <div className='HS-top-button-container'/>
          <ul>
            {loadServices()}
          </ul>
          <Link to='./main' className='link'>
          <a className="HS-button"  target="_blank" >
              <text className='HS-button-text'>Get Started</text>
          </a>
          </Link>  
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
