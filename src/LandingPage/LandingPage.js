
import './App.css';
import login from '../images/login.png';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className='container'>
      <div className='login_Img'><img id='login_image' src={login} alt='Image is getting loaded please wait'/></div>
      <div className='RightPart'>
        <b id='name'>10x Team 04</b><br/>
        <Link to='/Postview'><button id='btn'>Enter</button></Link>
        
      </div>
    </div>
  );
}

export default LandingPage;
