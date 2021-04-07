import React from 'react';
import { withRouter } from "react-router-dom";
import { Formik, Form } from 'formik';
import { TextField } from './Textfield'
import * as Yup from 'yup';

const Signup = (props) => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        middleName: '',
        lastName: '',
        userid:'',
        code:'',
        email: '',
        password: '',
        gender:'',
        city:'',
        address:'',
        cellno:'',
        regdate:'',
        cnicno: '',
        cnic_upload:'',
        bankname:'',
        branchcode:'',
        accountno:'',
        checkupload:''
       


      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div className="col px-md-5">
          <h1 className="my-4 font-weight-bold .display-4">Profile Information</h1>
          <Form className="d-flex justify-content-between">

            <div className="px-5 bd-highlight">
            <h4 className="my-4 font-weight-bold .display-4">User Details</h4>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Middle Name" name="MiddleName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Father Name/Spouse Name" name="Father/Spouse" type="text" />
            {/* <TextField label="UserID" name="userid" type="text" />
            <TextField label="Code" name="code" type="text" /> */}
            {/* <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" /> */}
            <label htmlFor="email" style={{ display: 'block' }}>
        Gender
      </label>
      <select
        name="gender"
        style={{ display: 'block' }}
      >
        <option value="" label="Select Gender" />
        <option value="male" label="Male" />
        <option value="female" label="Female" />
        
      </select>
      <TextField label="Cell No" name="cellno" type="number" />
            <TextField label="City" name="city" type="text" />
            <TextField label="Address" name="address" type="text" />
           
            </div>
            <div className="px-7 bd-highlight">
            <h4 className="my-4 font-weight-bold .display-4">Payment Method  Details </h4>
            
            {/* <TextField label="Registration Date " name="regdate" type="date" /> */}
            <label htmlFor="email" style={{ display: 'block' }}>
            PAYMENT METHOD 
      </label>
      <select
        name="paymentmethod"
        style={{ display: 'block' }}
      >
        <option value="" label="Select Payment Method" />
        <option value="" label="Bank" />
       
        
        
      </select>
            <TextField label="BankName" name="BankName" type="text" />  
            <TextField label="BranchCode" name="BranchCode" type="number" />
            <TextField label="Account No" name="Account No" type="number" />
            
       
            <label for="file">CheckSlip upload</label>
                  <input id="file" name="file" type="file"  className="form-control" />
                  <TextField label="CNIC" name="CNIC" type="number" />
            <label for="file">CNIC upload</label>
                  <input id="file" name="file" type="file"  className="form-control" />
            <button className="btn btn-dark mt-3" type="submit">Save</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default withRouter(Signup)