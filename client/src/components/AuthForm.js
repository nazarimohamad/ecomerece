import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { TextField, Button, SnackbarContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { authUser } from '../store/actions/auth';

const AuthForm = ({headline, buttonText, signup, onAuth, error, history, removeError}) => {

  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState('');

  const newUser = {email, username, password, profileImageUrl}

  // useEffect(() => {
  //   history.listen(removeError)
  // }, []);


   const handleSubmit = (e) => {
    e.preventDefault();
    const authType = signup ? 'signup' : 'signin'
    onAuth(authType, newUser).then(() => {
      console.log("2");
      history.push("/")
  }).catch((err) => {
      console.log('eerrr')
  });
  }


  const action = (
    // console.log('action button pressed')
    <Button size="small"
      onClick={removeError}
    >
      X
    </Button>
  );


    return (
      <div className='authForm'>
        {error.message && (
        <div>
          <SnackbarContent
            className={classes.snackbar}
            message={error.message}
            action={action}
            // variant="error"
          />
        </div>)}
        <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <TextField
              id="outlined-basic"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              label="Email address"
              type='text'
              name='email'
              value={newUser.email}
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              label="Password"
              type="password"
              name='password'
              value={newUser.password}
              onChange={(e) => {setPassword(e.target.value)}}
            />
          </div>
          {signup && (
            <div>
              <div>
                <TextField
                  id="outlined-basic"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  label="Username"
                  type='text'
                  value={newUser.username}
                  name='username'
                  onChange={(e) => {setUsername(e.target.value)}}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  label="Profile image url"
                  type='text'
                  value={newUser.profileImageUrl}
                  name='profile-image-url'
                  onChange={(e) => {setProfileImageUrl(e.target.value)}}
                />
              </div>
            </div>
          )}
          <Button variant="outlined" type='submit' className={classes.button} color='primary'>
            {buttonText}
          </Button>
        </form>
      </div>
    );
}

export default withRouter(AuthForm);





const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
  button: {
    margin: theme.spacing(1),
    width: 400,
    height: 60
  },
  snackbar: {
    width: 400,
    margin: theme.spacing(1),
    backgroundColor: theme.palette.error.dark,
  },
}));