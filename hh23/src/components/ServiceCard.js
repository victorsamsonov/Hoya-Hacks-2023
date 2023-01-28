
import './ServiceCard.css';
import { Link } from "react-router-dom";

function ServiceCard() {
 
  return (
    <div className="card-container">
      <header className="SC-header">
        <div className='HS-row'>
            <h2>
                Lorem Ipsum
            </h2>
            
            {/* <img  src={(HEALTH_IMG)} className="HS-health-img"/> */}
       </div>
      </header>
      <div className='SC-main'>
        {/* <Link to='./main'>
        <a className="HS-button"  target="_blank">
            <text className='HS-button-text'>Get Started</text>
        </a>
        </Link>   */}
      </div>
    </div>
  );
}

export default ServiceCard;
