import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/auth';
import { addError, removeError } from '../store/actions/errors';


class Main extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state={
  //     currentUser: {},
  //     error: {}
  //   }
  // }


  render() {
    const { authUser, removeError, currentUser, error} = this.props;
    return (
      <div className='route'>
        <Switch>
          <Route exact path='/'  render={props => <Homepage {...props}/>}/>
          <Route  path='/signin'
                  render={props =>
                    <AuthForm
                    // {...props}
                    headline='Wellcome back'
                    buttonText='signin'
                    onAuth={authUser}
                    error={error}
                    removeError={removeError}
                    />
                  }
          />
          <Route  path='/signup'
                  render={props =>
                    <AuthForm
                      // {...props}
                      headline='Join us'
                      buttonText='sign up'
                      signup
                      onAuth={authUser}
                      error={error}
                      removeError={removeError}
                    />
                  }
          />
          {/* <Route path='/about'
                 render={props =>
                  <Posts
                    {...props}
                  />
                 }
          /> */}
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    error: state.errors
  }
}


export default withRouter(connect(mapStateToProps, { authUser, addError, removeError })(Main));