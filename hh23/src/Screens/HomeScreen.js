
import './HomeScreen.css';
const HEALTH_IMG = require("../images/cardiogram.png");

function HomeScreen() {
 
  return (
    <div className="App">
      <header className="HS-header">
        <div className='HS-row'>
            <h2>
                Lorem Ipsum
            </h2>
            
            <img  src={(HEALTH_IMG)} className="HS-health-img"/>
       </div>
      </header>
      <ul class="box-area">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className='HS-main'>
        <a className="HS-button"  target="_blank">
            <text className='HS-button-text'>Get Started</text>
            </a>
      </div>
    </div>
  );
}

export default HomeScreen;
