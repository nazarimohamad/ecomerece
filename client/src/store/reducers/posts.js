import { LOAD_POSTS } from '../actionTypes';


const defaultState = {
  posts: [{}]
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return  {
        ...state, posts: [...action.post]}
    default:
      return state;
  }
}