import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import AllPost from '../components/AllPost';
import { authUser } from '../store/actions/auth';
import { fetchPosts } from '../store/actions/posts';
import { addError, removeError } from '../store/actions/errors';


class Main extends Component {


  render() {
    const { authUser, removeError, currentUser, error, posts, fetchPosts} = this.props;
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
          <Route path='/posts'
                 render={props =>
                  <AllPost
                  posts={posts}
                  getPosts={fetchPosts}
                    {...props}
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
    currentUser: state.currentUser,
    error: state.errors,
    posts: state.posts.posts
  }
}


export default withRouter(connect(mapStateToProps, { authUser, fetchPosts, addError, removeError })(Main));