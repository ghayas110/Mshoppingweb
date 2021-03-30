import React, { useRef, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
// import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// import { blue } from "@material-ui/core/colors";
// import { blue } from "@material-ui/core/colors";
import Switch from '@material-ui/core/Switch';
import { checkcon, passwordRegex } from './reuse'
import { createUser } from '../graphql/mutations'
import { listUsers } from '../graphql/queries'
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify'
import Login from "./Login";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 393,
  },
  Genderclass: {
    //  margin: theme.spacing(1),
    minWidth: 100,
    width: "200px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  text: {
    textAlign: "left",
  },
}));

const Register = (props) => {
  const classes = useStyles();

  const [data, setData] = useState({
    usercode: '',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    phone_number: '',
    confirm_password: '',
    referalUserCode: '',
    check_UserCodeChange: false,
    check_FirstNameChange: false,
    check_LastNameChange: false,
    check_MiddleNameChange: false,
    check_EmailChange: false,
    check_PhoneChange: false,
    check_ReferalUserCodeChange: false,
    check_PasswordChange: false,
    check_ConfirmPasswordChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    userCodeIsUnique: false
  })


  //working
  async function signUp() {
    try {
      console.log(data.check_UserCodeChange, data.check_FirstNameChange, data.check_LastNameChange, data.check_EmailChange, data.check_PhoneChange, data.check_ReferalUserCodeChange, data.check_PasswordChange);
      if (data.check_UserCodeChange === true && data.check_FirstNameChange === true && data.check_LastNameChange === true && data.check_EmailChange === true && data.check_PhoneChange === true && data.check_ReferalUserCodeChange === true && data.check_PasswordChange === true) {
        const userCode = await API.graphql(graphqlOperation(listUsers, { filter: { userCode: { eq: data.usercode } } }))
        const userCodeResult = userCode.data.listUsers.items
        console.log('userCodeResult', userCodeResult, userCodeResult.length)
        if (userCodeResult.length == 0) {
          console.log('unique')
          const parentData = await API.graphql(graphqlOperation(listUsers, { filter: { userCode: { eq: data.referalUserCode } } }))
          const parentUser = parentData.data.listUsers.items
          console.log('parentUser:', parentUser.length)
          if (parentUser.length == 1) {
            console.log('Parent Exist')
            await Auth.signUp({
              username: data.email,
              password: data.password,
              attributes: {
                email: data.email,          // optional
                phone_number: data.phone_number,   // optional - E.164 number convention
                // other custom attributes
              }
            })
              .then(async (user) => {
                console.log(user)
                const newUser = { firstName: data.firstName, email: data.email, phone_number: data.phone_number, parentId: parentUser[0].id, userCode: data.usercode }
                const createdUser = await API.graphql(graphqlOperation(createUser, { input: newUser }))
                console.log('createdResellerUser', createdUser.data)
                props.history.push("confirmation", {email: data.email})
              })
          }
          else {
            console.log('Parent referal Code not correct');
          }
        }
        else {
          console.log('notunique');
        }
      }
      else {
        console.log('Fill all Fields')
        //ToastAndroid.showWithGravity('Fill all Fields', ToastAndroid.LONG, ToastAndroid.CENTER)
      }
    } catch (error) {
      console.log('error signing up:', error);
      // ToastAndroid.showWithGravity(error.message, ToastAndroid.LONG, ToastAndroid.CENTER)
    }
  }

  const handleReferalUserCode = (val) => {
    if (val.length >= 7 && val.length <= 10) {
      setData({
        ...data,
        referalUserCode: val,
        check_ReferalUserCodeChange: true
      });
    } else {
      setData({
        ...data,
        referalUserCode: val,
        check_ReferalUserCodeChange: false
      });
    }
  }

  const handleUserCode = (val) => {
    if (val.length >= 7 && val.length <= 10) {
      setData({
        ...data,
        usercode: val,
        check_UserCodeChange: true
      });
    } else {
      setData({
        ...data,
        usercode: val,
        check_UserCodeChange: false
      });
    }
  }

  const handleEmailAddress = (val) => {
    if (checkcon.test(val)) {
      setData({
        ...data,
        email: val,
        check_EmailChange: true
      });
    } else {
      setData({
        ...data,
        email: val,
        check_EmailChange: false
      });
    }
  }

  const handleUserName = (val, changestate) => {
    if (changestate == "Fname") {
      if (val.length >= 3 && val.length <= 15) {
        setData({
          ...data,
          firstName: val,
          check_FirstNameChange: true
        });
      } else {
        setData({
          ...data,
          firstName: val,
          check_FirstNameChange: false
        });
      }
    }
    else if (changestate == 'Lname') {
      if (val.length >= 3 && val.length <= 15) {
        setData({
          ...data,
          lastName: val,
          check_LastNameChange: true
        });
      } else {
        setData({
          ...data,
          lastName: val,
          check_LastNameChange: false
        });
      }
    }
    else if (changestate == 'Mname') {
      if (val.length >= 3 && val.length <= 15) {
        setData({
          ...data,
          middleName: val,
          check_MiddleNameChange: true
        });
      } else {
        setData({
          ...data,
          middleName: val,
          check_MiddleNameChange: false
        });
      }
    }
  }

  const handlePhoneNumber = (val) => {
    if (val.length < 10) {
      setData({
        ...data,
        phone_number: '+92'.concat(val),
        check_PhoneChange: false
      });
    } else {
      setData({
        ...data,
        phone_number: '+92'.concat(val),
        check_PhoneChange: true
      });
    }
  }

  const handlePasswordChange = (val) => {
    if (passwordRegex.test(val)) {
      setData({
        ...data,
        password: val,
        check_PasswordChange: true
      });
    } else {
      setData({
        ...data,
        password: val,
        check_PasswordChange: false
      });
    }
  }

  const handleConfirmPasswordChange = (val) => {
    if (passwordRegex.test(val)) {
      setData({
        ...data,
        confirm_password: val,
        check_ConfirmPasswordChange: true
      });
    } else {
      setData({
        ...data,
        confirm_password: val,
        check_ConfirmPasswordChange: true
      });
    }
  }


  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry
    });
  }
  //ending

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={e =>
                  handleUserName(e.target.value, "Fname")}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={e =>
                  handleUserName(e.target.value, "Lname")}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            {/* <Grid >
              <div className={classes.root}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <p style={{ color: 'blue' }}>UPLOAD PROFILE </p>

                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Upload
                </Button>
                </label>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="icon-button-file"
                  type="file"
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </div>
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={e =>
                  handleEmailAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e =>
                  handlePasswordChange(e.target.value)}
              />
            </Grid>


            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Cellno"
                label="Cell No"
                type="textx"
                id="CellNo"
                autoComplete="current-password"
                onChange={e =>
                  handlePhoneNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="UserId"
                label="ref code"
                name="refCode"
                autoComplete="Uid"
                onChange={e =>
                  handleReferalUserCode(e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="middlName"
                label="Middle Name"
                name="UC"
                autoComplete="Pid"
                onChange={e =>
                  handleUserName(e.target.value, "Mname")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="uc"
                label="User Code"
                name="uc"
                autoComplete="uc"
                onChange={e =>
                  handleUserCode(e.target.value)}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Role
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  //   value={age}
                  //   onChange={handleChange}
                  label="Role"
                  className={classes.text}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Selected Role</MenuItem>
                  <MenuItem value={20}>Selected Role</MenuItem>
                  <MenuItem value={30}>Selected Role</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.Genderclass}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  //   value={age}
                  //   onChange={handleChange}
                  label="gender"
                  className={classes.text}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>MALE</MenuItem>
                  <MenuItem value={20}>FEMALE</MenuItem>
                  <MenuItem value={30}>OTHERS</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="city"
                label="City"
                name="city"
                autoComplete="city"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="address"
                label="Address"
                type="text"
                id="address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cnic"
                label="CNIC"
                type="text"
                id="cnic"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className={classes.root}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <p style={{ color: 'blue' }}>UPLOAD CNIC IMAGES</p>

                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Upload
                </Button>
                </label>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="icon-button-file"
                  type="file"
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </div>
            </Grid> */}
            <FormControlLabel
              control={
                <Switch
                  // checked={state.checkedB}
                  // onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="ACTIVE"
            />

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // className={classes.submit}
            onClick={signUp}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link
                href="#"
                variant="body2"
                onClick={() => {
                  <Login />;
                }}
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Register;
