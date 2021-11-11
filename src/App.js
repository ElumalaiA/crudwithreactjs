
import React from 'react';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import './App.css'; 
import Adddoctor from './Doctor/Adddoctor';
import Editdoctor from './Doctor/Editdoctor';
import Doctorlist from './Doctor/Doctorlist';
import ButtonClick from './Doctor/ButtonClick';
import OTP from './Doctor/OTP';
function App() {  
  return (  
    <Router>  
      <div className="container">  
        <nav className="navbar navbar-expand-lg navheader">  
          <div className="collapse navbar-collapse" >  
            <ul className="navbar-nav mr-auto">  
             
              <li className="nav-item">  
                <Link to={'/Adddoctor'} className="nav-link">Add Doctor</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/Doctorlist'} className="nav-link">List</Link>  
              </li> 
              <li className="nav-item">  
                <Link to={'/ButtonClick'} className="nav-link">Button</Link>  
              </li> 
              {/* <li className="nav-item">  
                <Link to={'/OTP'} className="nav-link">otp</Link>  
              </li>  */}
                  
            </ul>  
          </div>  
        </nav> <br />  
        <Switch>  
        <Route exact path='/Adddoctor' component={Adddoctor} /> 
          <Route exact path='/Doctorlist' component={Doctorlist} /> 
          <Route path='/ButtonClick' component={ButtonClick} /> 
          <Route path='/Editdoctor/:doctorID' component={Editdoctor} />  
          {/* <Route path='/OTP' component={OTP} />   */}
        </Switch>  
      </div>  
    </Router>  
  );  
}  

export default App;  