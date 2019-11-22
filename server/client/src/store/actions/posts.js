import { apiCall } from '../../services/api';
import { LOAD_POSTS } from '../actionTypes';
import axios from 'axios';


export const getPosts = post => ({
  type: LOAD_POSTS,
  post
  // console.log(posts)
});


export const fetchPosts = () => {
  return dispatch => {
    return apiCall("get", "/api/posts")
      .then(res => {
        dispatch(getPosts(res));
      })
      .catch(err => {
        console.log("dispatch(addError(err.message))");
      });
  };
};




