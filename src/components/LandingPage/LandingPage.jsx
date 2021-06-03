import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import LandingForm from '../LandingForm/LandingForm';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div>
      {/* <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
            Welcome to MyBacklog! This is a site where users can create a backlog
            of games!
          </p>

          <p>
           
          </p>

          <p>
            <LandingForm />
            
          </p>
        </div>
        <div className="grid-col grid-col_4">


          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div> */}
      <LandingForm />
    </div>
  );
}

export default LandingPage;
