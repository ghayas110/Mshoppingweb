import React, { useRef, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import logos from "../Mshoping.png"
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import VisibilityIcon from '@material-ui/icons/Visibility';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FaWhatsapp } from "react-icons/fa";
import Back from "../umbrela.jpeg";
import InputLabel from "@material-ui/core/InputLabel";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import { checkcon, passwordRegex, userNameRegex } from "./reuse";
import { createUser } from "../graphql/mutations";
import { listUsers } from "../graphql/queries";
import Amplify, { API, Auth, graphqlOperation } from "aws-amplify";
import Login from "./Login";
import logo from "../Mshoping.png"
import { Input } from "@material-ui/core";
import { Alert } from 'reactstrap'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Mshopping World
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  paper: {

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  root: {
    "& > *": {

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
  err: {
    color: 'red',
    fontSize: 12
  }
}));

const Register = (props) => {
  const [errors, setErrors] = useState("")
  const classes = useStyles();

  // const[url]
  const [data, setData] = useState({
    usercode: "",
    userName: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    phone_number: "",
    confirm_password: "",
    referalUserCode: "",

    check_UserCodeChange: false,
    check_UserNameChange: 0,
    check_NamesChange: 0,
    // check_LastNameChange: false,
    // check_MiddleNameChange: false,
    check_EmailChange: 0,
    check_PhoneChange: 0,
    check_ReferalUserCodeChange: false,
    check_PasswordChange: 0,
    secureTextEntry: true,
    userNameIsUnique: 0,
  });

  useEffect(async () => {
    var number = await Date.now() // 0.9394456857981651
    // console.log(number);
    console.log(number.toString(36)); // '0.xtis06h6'
    var id = number.toString(36) // 'xtis06h6'
    // console.log(id.length >= 8); // false
    // console.log(window.location.href.substring(window.location.href.lastIndexOf('/') + 1));
    const refUsercode = await window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    if (refUsercode !== 'register')
      setData({
        ...data,
        usercode: id,
        referalUserCode: refUsercode,
        check_UserCodeChange: true,
        check_ReferalUserCodeChange: true,
      })
    else
      setData({
        ...data,
        usercode: id,
        check_UserCodeChange: true,
        check_ReferalUserCodeChange: false,
      })
  }, [])

  //working
  async function signUp() {
    try {
      console.log('Ref',
        data.referalUserCode,
        // data.check_NamesChange,
        // data.check_UserNameChange,
        // data.check_EmailChange,
        // data.check_PhoneChange,
        // data.check_ReferalUserCodeChange,
        // data.check_PasswordChange
      )
      if (
        data.check_UserCodeChange === true &&
        data.check_NamesChange === true &&
        data.check_UserNameChange === true &&
        data.check_EmailChange === true &&
        data.check_PhoneChange === true &&
        data.check_ReferalUserCodeChange === true &&
        data.check_PasswordChange === true
      ) {
        const userCode = await API.graphql(
          graphqlOperation(listUsers, {
            filter: { userCode: { eq: data.usercode } },
          })
        );
        const userCodeResult = userCode.data.listUsers.items
        // console.log("userCodeResult", userCodeResult, userCodeResult.length)
        if (userCodeResult.length == 0) {
          console.log("UserCode unique")
          const userName = await API.graphql(
            graphqlOperation(listUsers, {
              filter: { userName: { eq: data.userName } },
            })
          );
          const userNaame = await API.graphql(
            graphqlOperation(listUsers, {
              filter: { userName: { eq: data.userName } },
            })
          );
          const userNameResult = userNaame.data.listUsers.items
          console.log("userNameResult", userNameResult, userNameResult.length)
          if (userNameResult.length === 0) {
            setData({ ...data, userNameIsUnique: true })
            const parentData = await API.graphql(
              graphqlOperation(listUsers, {
                filter: { userCode: { eq: data.referalUserCode } },
              })
            );
            const parentUser = parentData.data.listUsers.items;
            // console.log("parentUser:", parentUser.length);
            if (parentUser.length == 1) {
              await Auth.signUp({
                username: data.email,
                password: data.password,
                attributes: {
                  email: data.email, // optional
                  phone_number: data.phone_number, // optional - E.164 number convention
                  // other custom attributes
                },
              }).then(async (user) => {
                // console.log(user);
                const newUser = {
                  firstName: data.firstName,
                  middleName: data.middleName,
                  lastName: data.lastName,
                  email: data.email,
                  phone_number: data.phone_number,
                  parentId: parentUser[0].id,
                  userName: data.userName,
                  userCode: data.usercode,
                };
                const createdUser = await API.graphql(
                  graphqlOperation(createUser, { input: newUser })
                );
                // console.log("createdResellerUser", createdUser.data);
                props.history.push("/confirmation", { email: data.email })
              });
            } else
              alert("Parent referal Code not correct");
          } else {
            setData({ ...data, userNameIsUnique: false })
            console.log("UserName notunique");
          }
        }
        else {
          console.log("UserCode notunique");
        }
      } else {
        setData({
          ...data,
          check_UserCodeChange: data.check_UserCodeChange === true ? true : false,
          check_NamesChange: data.check_NamesChange === true ? true : false,
          check_UserNameChange: data.check_UserNameChange === true ? true : false,
          check_EmailChange: data.check_EmailChange === true ? true : false,
          check_PhoneChange: data.check_PhoneChange === true ? true : false,
          check_ReferalUserCodeChange: data.check_ReferalUserCodeChange === true ? true : false,
          check_PasswordChange: data.check_PasswordChange === true ? true : false
        })
        if (data.check_ReferalUserCodeChange === false) alert('Referal User Code is not provided in the URL')
        //ToastAndroid.showWithGravity('Fill all Fields', ToastAndroid.LONG, ToastAndroid.CENTER)
      }
    } catch (error) {
      console.log("error signing up:", error);
      alert(error.message)
      // ToastAndroid.showWithGravity(error.message, ToastAndroid.LONG, ToastAndroid.CENTER)
    }
  }

  const handleReferalUserCode = (val) => {
    if (val.length >= 7 && val.length <= 10) {
      setData({
        ...data,
        referalUserCode: val,
        check_ReferalUserCodeChange: true,
        // console.log(data)
      });
    } else {
      setData({
        ...data,
        referalUserCode: val,
        check_ReferalUserCodeChange: false,
      });
    }
  };

  const handleUserCode = (val) => {
    if (val.length >= 7 && val.length <= 10) {
      setData({
        ...data,
        usercode: val,
        check_UserCodeChange: true,
      });
    } else {
      setData({
        ...data,
        usercode: val,
        check_UserCodeChange: false,
      });
    }
  };

  const handleEmailAddress = (val) => {
    if (checkcon.test(val) && data.email !== 0) {
      setData({
        ...data,
        email: val,
        check_EmailChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_EmailChange: false,
      });
    }
  };

  const handleUserName = (val) => {
    if (userNameRegex.test(val)) {
      setData({
        ...data,
        userName: val,
        check_UserNameChange: true,
      });
    } else {
      setData({
        ...data,
        userName: val,
        check_UserNameChange: false,
      });
    }
  }

  const handleNames = (val, changestate) => {
    if (changestate == "Fname") {
      if (val.length >= 3 && val.length <= 15) {
        setData({
          ...data,
          firstName: val,
          check_NamesChange: true,
        });
      } else {
        setData({
          ...data,
          firstName: val,
          check_NamesChange: false,
        });
      }
    } else if (changestate == "Lname") {
      if (val.length >= 3 && val.length <= 15) {
        setData({
          ...data,
          lastName: val,
          check_NamesChange: true,
        });
      } else {
        setData({
          ...data,
          lastName: val,
          check_NamesChange: false,
        });
      }
    } else if (changestate == "Mname") {
      if (val.length >= 3 && val.length <= 15) {
        setData({
          ...data,
          middleName: val,
          check_NamesChange: true,
        });
      } else {
        setData({
          ...data,
          middleName: val,
          check_NamesChange: false,
        });
      }
    }
  };

  const handlePhoneNumber = (val) => {
    if (val.length > 10) {
      setData({
        ...data,
        phone_number: val,
        check_PhoneChange: true,
      });
    } else {
      setData({
        ...data,
        phone_number: val,
        check_PhoneChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (passwordRegex.test(val)) {
      setData({
        ...data,
        password: val,
        check_PasswordChange: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        check_PasswordChange: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  //ending

  return (
    <div className="Register" style={{ backgroundImage: `url(${Back})`, backgroundSize: 'cover', padding: '20px' }}>
      <Container component="main" maxWidth="xs" style={{ backgroundColor: "white" }} >
        {/* <img src= {Back} width='100%' height='100%' /> */}
        <CssBaseline />
        <div className={classes.paper}>
          <div style={{ marginTop: 20 }}>
            <img src={logos} alt="logo" width="25px" />
          </div>
          <Typography component="h1" variant="h5">
            Sign up
        </Typography>
          <form className={classes.form} noValidate>
            {<Alert color='info'> Please enter your name as per your CNIC. <br /> Leave the field empty that is not relevant </Alert>}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  onChange={(e) => handleNames(e.target.value, "Fname")}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Full Name"
                  autoFocus

                />

              </Grid>
              {/* <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => handleNames(e.target.value, "Lname")}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
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
                onChange={(e) => handleNames(e.target.value, "Mname")}
              />

            </Grid> */}
              {data.check_NamesChange === false ? <div className={classes.err} >Please enter your full name</div> : <></>}
              <Alert color='info' style={{ fontSize: 11 }} >Username must be unique and only allowed alphbets digits and underscore</Alert>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="userName"
                  label="Username"
                  onChange={(e) => handleUserName(e.target.value)}
                />
                {data.check_UserNameChange === false ? <div className={classes.err} >User Name at least 5 characters long </div> : <></>}
                {data.userNameIsUnique === false ? <div className={classes.err} >This Username is not available</div> : <></>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => handleEmailAddress(e.target.value)}
                />
                {data.check_EmailChange === false ? <div className={classes.err} >Email Should be Valid</div> : <></>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={data.secureTextEntry === true ? 'password' : 'text'}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                />
                <Button style={{ position: 'absolute', marginTop: 10, marginLeft: -80, alignSelf: 'center' }} onClick={updateSecureTextEntry}> <VisibilityIcon /></Button>
                {data.check_PasswordChange === false ? <div className={classes.err}> Password Should be 8 character long </div> : <></>}
              </Grid>
              <Alert color='info' style={{ fontSize: 11 }}>Phone number must provide like +92XXXXXXXXXX (12 digits long)</Alert>
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
                  onChange={(e) => handlePhoneNumber(e.target.value)}
                />

              </Grid>

              <Grid item xs={12} sm={9}>
                <FormControlLabel
                  control={<Checkbox name="checkedA" color='primary' required />}
                  label="I accept terms and Conditions"
                />

              </Grid>

              <Grid item xs={12}>

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
            <Grid container justify="flex-end" style={{ marginTop: 10 }}>
              <Grid item>
                <Link
                  href=''
                  variant="body2"
                  onClick={() => {
                    props.history.push("/");
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
        <a
          href="https://wa.me/+447949549043"
          class="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <i class="fa fa-whatsapp" aria-hidden="true"></i> */}
          <FaWhatsapp style={{ textAlign: 'center', height: '4.5em', width: '2.8em' }} />
        </a>
      </Container>
    </div>
  );
};

export default withRouter(Register)
