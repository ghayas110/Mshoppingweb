import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from "react-router-dom";
import { Formik, Form } from 'formik';
import { TextField } from './Textfield'
import * as Yup from 'yup';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { updateUser } from '../graphql/mutations'
import * as ActionTypes from '../redux/ActionTypes'


const Signup = (props) => {
  const { loggedInUser } = useSelector((state) => state);
  const dispatch = useDispatch()

  async function updateUserData(values) {
    try {
      let cnic = values.cnic_upload
      let accSlip = values.checkupload
      console.log(cnic, accSlip)
      delete values.cnic_upload
      delete values.checkupload
      const updateUserData = Object.assign({ id: loggedInUser.user.id }, values)
      console.log(updateUserData)
      const updatedUser = API.graphql(graphqlOperation(updateUser, { input: updateUserData }))
      dispatch({
        type: ActionTypes.ADD_LOGUSER,
        payload: updateUserData
      })
      console.log(updatedUser)
      if (cnic !== undefined && typeof (cnic) === 'object')
        await Storage.put(`${loggedInUser.user.id}/cnic`, cnic, {
          level: 'private'
        })
          .then(async (res) => {
            console.log(res)
          })
      if (accSlip !== undefined && typeof (accSlip) === 'object')
        await Storage.put(`${loggedInUser.user.id}/accountSlip`, accSlip, {
          level: 'private'
        })
          .then(async (res) => {
            console.log(res)
          })
      props.history.push('Profile')
    }
    catch (err) {
      console.log(err)
      alert(err)
    }
  }

  const validate = Yup.object({
    firstName: Yup.string()
      .min(3, 'Must be 3 character or more')
      .max(15, 'Must be 15 characters or less'),
    middleName: Yup.string()
      .min(3, 'Must be 3 character or more')
      .max(15, 'Must be 15 characters or less'),
    lastName: Yup.string()
      .min(3, 'Must be 3 character or more')
      .max(20, 'Must be 20 characters or less')

  })
  return (
    <Formik
      initialValues={{
        firstName: loggedInUser.user.firstName,
        middleName: loggedInUser.user.middleName,
        lastName: loggedInUser.user.lastName,
        userEmail: loggedInUser.user.userEmail,
        gender: loggedInUser.user.gender,
        userCode: loggedInUser.user.userCode,
        userName: loggedInUser.user.userName,
        city: loggedInUser.user.city,
        address: loggedInUser.user.address,
        phone_number: loggedInUser.user.phone_number.toString(),
        fs: loggedInUser.user.fs,
        paymentMethod: loggedInUser.user.paymentMethod,
        bankName: loggedInUser.user.bankName,
        branchCode: loggedInUser.user.branchCode,
        accountNo: loggedInUser.user.accountNo,
        CNIC: loggedInUser.user.CNIC,
        cnic_upload: {},
        checkupload: {},
      }}
      validationSchema={validate}
      onSubmit={async values => {
        console.log(values)
        updateUserData(values)
      }}
    >
      {({ handleSubmit, isSubmitting, handleChange, values, errors, touched }) => (
        <div className="col px-md-5">
          <h1 className="my-4 font-weight-bold .display-4">Profile Information</h1>
          <Form className="d-flex justify-content-between" >

            <div className="px-5 bd-highlight">
              <h4 className="my-4 font-weight-bold .display-4">User Details</h4>
              <TextField label="First Name" name="firstName" type="text" onChange={handleChange} />
              {/* {errors.firstName && touched.firstName ? (<div>{errors.firstName}</div>): <></>} */}
              <TextField label="Middle Name" name="middleName" type="text" onChange={handleChange} />
              <TextField label="Last Name" name="lastName" type="text" onChange={handleChange} />
              <TextField label="Father Name/Spouse Name" name="fs" type="text" onChange={handleChange} />
              <label htmlFor="email" style={{ display: 'block' }} >
                Gender
              </label>
              <select
                name="gender"
                style={{ display: 'block' }}
                onChange={handleChange}
              >
                <option value="" label="Select Gender" />
                <option value="male" label="Male" />
                <option value="female" label="Female" />
              </select>

              <TextField label="City" name="city" type="text" onChange={handleChange} />
              <TextField label="Address" name="address" type="text" onChange={handleChange} />

            </div>
            <div className="px-7 bd-highlight">
              <h4 className="my-4 font-weight-bold .display-4">Payment Method  Details </h4>

              {/* <TextField label="Registration Date " name="regdate" type="date" /> */}
              <label htmlFor="email" style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }} >
                PAYMENT METHOD
              </label>
              <select
                name="paymentMethod"
                style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                onChange={handleChange}
              >
                <option value="" label="Select Payment Method" />
                <option value="" label="Bank" />



              </select>
              <TextField label="BankName" name="bankName" type="text" onChange={handleChange} />
              <TextField label="BranchCode" name="branchCode" type="text" onChange={handleChange} />
              <TextField label="Account No" name="accountNo" type="number" onChange={handleChange} />

              <label htmlFor="file">CheckSlip upload</label>
              <input id="file" name="checkupload" type="file" accept='image/*' className="form-control" onChange={(e) => { values.checkupload = e.target.files[0] }} />
              <TextField label="CNIC" name="CNIC" type="number" />
              <label htmlFor="file">CNIC upload</label>
              <input id="file" name="cnic_upload" type="file" accept='image/*' className="form-control" onChange={(e) => { values.cnic_upload = e.target.files[0] }} />
              <button className="btn btn-dark mt-3 px-5" type="submit" onClick={handleSubmit} >Save</button>
              {/* <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button> */}
            </div>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default withRouter(Signup)