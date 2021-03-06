import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { CustomInput, Form, FormGroup, Label, Input } from 'reactstrap';
import { withRouter } from "react-router-dom";
import { Formik } from 'formik';
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
        id: loggedInUser.user.id,
        parentId: loggedInUser.user.parentId,
        firstName: loggedInUser.user.firstName,
        middleName: loggedInUser.user.middleName,
        lastName: loggedInUser.user.lastName,
        email: loggedInUser.user.email,
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
        <div className="col-12 px-0">
          <h1 className="col-12 my-4 font-weight-bold .display-4">Profile Information</h1>
          <Form className="col-12 d-flex justify-content-between flex-wrap" >

            <div className="col-12 col-md-6 col-lg-5 bd-highlight">
              <h3 className="my-4 font-weight-bold">User Details</h3>
              <FormGroup>
                <Label htmlFor="firstName" className='col-12' >First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  placeholder="First Name"
                  onChange={handleChange}
                />
              </FormGroup>
              {/* <TextField label="First Name" name="firstName" type="text" onChange={handleChange} /> */}
              <FormGroup>
                <Label htmlFor="middleName" className='col-12' >Middle Name</Label>
                <Input
                  type="text"
                  name="middleName"
                  value={values.middleName}
                  placeholder="Middle Name"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="lastName" className='col-12' >Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="fs" className='col-12' >Father Name/Spouse Name</Label>
                <Input
                  type="text"
                  name="fs"
                  placeholder="Father Name/Spouse Name"
                  value={values.fs}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="gender">Gender</Label>
                <CustomInput type="select" id="gender" name="gender" onChange={handleChange}
                value={values.gender} >
                  <option value="" label="Select Gender" />
                  <option value="male" label="Male" />
                  <option value="female" label="Female" />
                </CustomInput>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="city" className='col-12' >City</Label>
                <Input
                  type="text"
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="address" className='col-12' >Address</Label>
                <Input
                  type="text"
                  name="address"
                  placeholder="Address"
                  onChange={handleChange}
                />
              </FormGroup>
              
            </div>

            <div className="col-12 col-md-6 col-lg-5 bd-highlight">
              <h3 className="my-4 font-weight-bold col-12 px-0">Payment Details</h3>
              {/* <TextField label="Registration Date " name="regdate" type="date" /> */}
              <FormGroup>
                <Label htmlFor="paymentMethod">PAYMENT METHOD</Label>
                <CustomInput type="select" id="paymentMethod" name="paymentMethod" onChange={handleChange} >
                  <option value="" label="Select Payment Method" />
                  <option value="" label="Bank" />
                </CustomInput>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="branchname" className='col-12' >BankName</Label>
                <Input
                  type="text"
                  name="bankName"
                  placeholder="BankName"
                  onChange={handleChange}

                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="branchcode" className='col-12' >BranchCode</Label>
                <Input
                  type="text"
                  name="branchCode"
                  placeholder="BranchCode"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="Account No" className='col-12' >Account No</Label>
                <Input
                  type="text"
                  name="accountNo"
                  placeholder="Account No"
                  onChange={handleChange}
                />
              </FormGroup>
              

              
              
              <FormGroup>
                <Label for="file">CheckSlip upload</Label>
                <CustomInput type="file" id="file" name="checkupload" accept='image/*' label="CheckSlip upload" onChange={(e) => { values.checkupload = e.target.files[0] }} />
              </FormGroup>
              {/* <label htmlFor="file">CheckSlip upload</label>
              
              <input id="file" name="checkupload" type="file" accept='image/*' className="form-control" onChange={(e) => { values.checkupload = e.target.files[0] }} /> */}
              <FormGroup>
                <Label htmlFor="CNIC" className='col-12' >CNIC</Label>
                <Input
                  type="number"
                  name="CNIC"
                  placeholder="CNIC"
                  onChange={handleChange}
                />
              </FormGroup>
              

              <FormGroup>
                <Label for="file">CNIC upload</Label>
                <CustomInput type="file" id="file" name="cnic_upload" accept='image/*' label="CNIC upload" onChange={(e) => { values.checkupload = e.target.files[0] }} />
              </FormGroup>
             
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