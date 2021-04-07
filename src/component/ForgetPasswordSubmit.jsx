import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Whatsapp from './WhatsApp'
import Amplify, { Auth } from "aws-amplify";
import { checkcon, passwordRegex } from './reuse';


const ForgetPasswordSubmit = (props) => {
    const classes = useStyles();
    const [data, setData] = useState({
        email: props.location.state.email,
        code: '',
        newPassword: ''
    })

    async function ForgotPasswordSubmit() {
        if (checkcon.test(data.email) && data.code.length > 0 && passwordRegex.test(data.newPassword))
            await Auth.forgotPasswordSubmit(data.email, data.code, data.newPassword)
                .then(data => {
                    console.log(data)
                    alert('Password Change successful')
                    props.history.push('login')
                }
                )
                .catch(err => { alert(JSON.stringify(err[0])); console.log(err) });
        else {
            alert('Fill all Fields')
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
                    New Password
          </Typography>
                <Typography component="h2" variant="h5">
                    Provide Code and enter new password
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
                        disabled
                        autoComplete="email"
                        value={data.email}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="Verification Code"
                        name="code"
                        autoFocus
                        onChange={(e) => setData({ ...data, code: e.target.value })}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        autoFocus
                        onChange={(e) => setData({ ...data, newPassword: e.target.value })}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={ForgotPasswordSubmit}
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



export default withRouter(ForgetPasswordSubmit)
