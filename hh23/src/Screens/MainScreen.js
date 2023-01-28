
import './MainScreen.css';
import { Link } from "react-router-dom"
import ServiceCard from '../components/ServiceCard';
const HEALTH_IMG = require("../images/cardiogram.png");

function MainScreen() {
 
  return (
    <div className="App">
      <header className="MS-header">
        <div className='MS-row'>
            <h2 className="MS-title">
                Main Screen
            </h2>
            <img  src={(HEALTH_IMG)} className="MS-health-img"/>
       </div>
      </header>
      <ul class="box-area">
        {/* <li></li>
        <li></li>
        <li></li>
        <li></li> */}
        <li></li>
      </ul>
      <div className='MS-main'>
        <div>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
        </div>
        {/* <a className="MS-button"  target="_blank">
            <text className='MS-button-text'>Get Started</text>
            </a> */}
      </div>
    </div>
  );
}

export default MainScreen;
