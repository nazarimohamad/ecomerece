import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { TextField, Button, SnackbarContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './style.scss';

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
        <div className='formStyle'>
          {error.message && (
          <div>
            <SnackbarContent
              className={classes.snackbar}
              message={error.message}
              action={action}
              // variant="error"
            />
          </div>)}
          <div className='container'>
            <h2 style={{color:'white', fontSize:'36px', textAlign:'center'}}>{headline}</h2>
            <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
              <div>
                <TextField
                  id="outlined-email-input"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    className: classes.label,
                  }}
                  label="Email address"
                  type='text'
                  name='email'
                  // autoComplete="email"
                  value={newUser.email}
                  onChange={(e) => {setEmail(e.target.value)}}
                />
              </div>
              <div>
                <TextField
                  id="outlined-password-input"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    className: classes.label,
                  }}
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
                      InputLabelProps={{
                        className: classes.label,
                      }}
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
                      InputLabelProps={{
                        className: classes.label,
                      }}
                      label="Profile image url"
                      type='text'
                      value={newUser.profileImageUrl}
                      name='profile-image-url'
                      onChange={(e) => {setProfileImageUrl(e.target.value)}}
                    />
                  </div>
                </div>
              )}
              <Button variant="contained" color="secondary" type='submit' className={classes.button} >
                {buttonText}
              </Button>
            </form>
          </div>
        </div>
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
    width: '95%',
    color: "primary"
  },
  label: {
    color: 'white'
  },
  button: {
    margin: theme.spacing(1),
    width: '95%',
    height: 60
  },
  snackbar: {
    width: '95%',
    margin: theme.spacing(1),
    backgroundColor: theme.palette.error.dark,
  },
}));