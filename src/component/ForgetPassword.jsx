import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Whatsapp from './WhatsApp'
import Amplify, { Auth } from "aws-amplify";
import { checkcon } from './reuse';


const ForgetPassword = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState('')

  async function ForgotPassword() {
    if (checkcon.test(email))
      await Auth.forgotPassword(email)
        .then(data => {
          console.log(data)
          props.history.push('forgetPasswordsubmit', { email: email })
        }
        )
        .catch(err => console.log(err));
    else {
      alert('Provide correct email address!')
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
          </Typography>
        <Typography component="h2" variant="h5">
          We will send you an email to reset your password
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
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={ForgotPassword}
          >
            Send Mail
            </Button>
        </form>
      </div>
      <Whatsapp />
    </Container>
  )
}


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default withRouter(ForgetPassword)
