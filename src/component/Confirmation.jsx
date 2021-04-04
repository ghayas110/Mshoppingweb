import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Amplify, { Auth } from 'aws-amplify'
import Home from './Home';
import { FaWhatsapp } from "react-icons/fa";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
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

const Confirmation = (props) => {
  const classes = useStyles();

  const [data, setData] = React.useState({
    email: props.location.state.email !== null ? props.location.state.email : '',
    code: '',
    check_textInputChange: false,
  })

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(data.email, data.code)
      console.log('done!')
      props.history.push('login')
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  }

  const textInputChange = (val) => {
    console.log(data);
    if (val.length != 0) {
      setData({
        ...data,
        code: val,
        check_textInputChange: true
      });
    } else {
      setData({
        ...data,
        code: val,
        check_textInputChange: false
      });
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
          Confirmation
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            disabled
            fullWidth
            id="email"
            value={data.email}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="code"
            label="Code"
            id="code"
            onChange={e =>
              textInputChange(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={confirmSignUp}
          >
            Confirmed
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      <a
        href="https://wa.me/+447949549043"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <i class="fa fa-whatsapp" aria-hidden="true"></i> */}
        <FaWhatsapp style={{textAlign:'center',height: '4.5em',width: '2.8em'}} />
      </a>
    </Container>
  );
}

export default Confirmation