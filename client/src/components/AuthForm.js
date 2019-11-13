import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
// import { authUser } from '../store/actions/auth';

const AuthForm = ({headline, buttonText, signup, onAuth}) => {

  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState('');

  const newUser = {email, username, password, profileImageUrl}



   const handleSubmit = (e) => {
    e.preventDefault();
    const authType = signup ? 'signup' : 'signin'
    onAuth(authType, newUser).then(() => {
      console.log("2");
  }).catch(() => {
      console.log('error.response.data.error');
  });
  }



    return (
      <div className='authForm'>
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

export default AuthForm;





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
}));