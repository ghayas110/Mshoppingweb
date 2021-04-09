import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { checkcon, passwordRegex } from "./reuse";
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import { useDispatch } from "react-redux";
import * as ActionTypes from "../redux/ActionTypes";
import { listUsers } from "../graphql/queries";
import ReactWhatsapp from "react-whatsapp";
import { render } from "react-dom";
import { FaWhatsapp } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";
import CopyRight from "./CopyRight";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  async function signIn() {
    try {
      if (checkcon.test(data.email)) {
        await Auth.signIn(data.email, data.password).then(async (user) => {
          const getIdData = await API.graphql(
            graphqlOperation(listUsers, {
              filter: { email: { contains: user.attributes.email } },
            })
          );
          const getId = getIdData.data.listUsers.items;
          var loggedinUserId = "";
          if (getId[0] !== undefined) {
            loggedinUserId = getId[0].id;
          }
          dispatch({
            type: ActionTypes.ADD_LOGUSER,
            payload: {
              id: loggedinUserId,
              parentId: getId[0].parentId,
              userName: getId[0].userName,
              phone_number: getId[0].phone_number,
              userCode: getId[0].userCode,
              firstName: getId[0].firstName,
              middleName: getId[0].middleName,
              lastName: getId[0].lastName,
              userEmail: user.attributes.email,
              gender: '',
              dob: '',
              address: '',
              city: '',
              CNIC: '',
            },
          });
          console.log(getId[0]);
          props.history.push("UserPanel");

        });
      } else {
        alert("Email or Password Incorrect!");
      }
    } catch (error) {
      window.alert(error.message);
      console.log(error.message);
    }
  }

  const textInputChange = (val) => {
    if (checkcon.test(val)) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            inputMode="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => textInputChange(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            type={data.secureTextEntry === true ? 'password' : 'text'}
            onChange={(e) => handlePasswordChange(e.target.value)}
          />
          <Button style={{ position: 'absolute', marginLeft: -80,marginTop:30, alignSelf: 'center' }} onClick={updateSecureTextEntry}>Show</Button>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={signIn}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to='ForgetPassword'
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to='register'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <CopyRight />
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
  );
};

export default withRouter(Login);
