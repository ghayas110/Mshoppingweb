import React from 'react';
import rocketImg from './rocket.png';
import { Signup } from './component/Signup';

 
 function SignupForm(){
   // Pass the useFormik() hook initial form values and a submit function that will
   // be called when the form is submitted
   
    return (
        <div className="container mt-1 ml-4">
      <div className="row">
        <div className="col-md-7.5">
          <Signup />
        </div>
   
      </div>
    </div>
   );
 };
 export default SignupForm;