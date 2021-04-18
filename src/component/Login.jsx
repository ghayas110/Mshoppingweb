import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import logos from "../Mshoping.png";
import Back from "../umbrela.jpeg";
import VisibilityIcon from '@material-ui/icons/Visibility';
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
import Whatsapp from "./WhatsApp";

const useStyles = makeStyles((theme) => ({
  // paper: {
  // paddingBottom:40,
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  // },
  avatar: {
  
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
          props.history.push("dashboard");

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
    <div className="Login"  style={{ backgroundImage: `url(${Back})`,backgroundSize: 'cover' ,minHeight:"100vh", paddingTop: '50px' }}>
    
    <Container  maxWidth="xs"  style={{ backgroundColor:"white", padding: '20px' }} >
   
      <div className={classes.paper} style={{ }}  >
      <div  style={{marginTop:20}}>
        <img src={logos} alt="logo" width="80px" />
        </div>
        <div style={{ marginTop:40}}>
        <Typography component="h1" variant="h5" width="90px" >
          Log in
        </Typography>
        </div>
        <form className={classes.form} noValidate >
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
          <Button style={{ position: 'absolute', marginLeft: -80,marginTop:30, alignSelf: 'center' }} onClick={updateSecureTextEntry}> <VisibilityIcon/></Button>
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
            LOG IN
          </Button>
          <Grid container style={{marginTop: 10}} >
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
    
  <Whatsapp/>
    </Container>
    </div>
  );
};

export default withRouter(Login);
