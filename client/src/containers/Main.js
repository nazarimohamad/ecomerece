import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/auth';


class Main extends Component {

  render() {
    const { authUser } = this.props;
    return (
      <div className='route'>
        <Switch>
          <Route exact path='/'  render={props => <Homepage {...props}/>}/>
          <Route  path='/signin'
            render={props =>
                    <AuthForm
                    {...props}
                    headline='well come back'
                    buttonText='signin'
                    onAuth={authUser}
                    />
            }
          />
          <Route  path='/signup'
            render={props =>
                  <AuthForm
                    headline='join our store right now'
                    buttonText='sign up'
                    signup
                    onAuth={authUser}
                  />
            }
          />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.currentUser
  }
}


export default withRouter(connect(mapStateToProps, { authUser })(Main));