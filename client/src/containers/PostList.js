import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../store/actions/posts';
import '../components/style.scss'
import Post from '../components/Post';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


class PostList extends React.Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const { posts } = this.props
    const classes = useStyles;
    return (
      <section className='postList'>
        {/* <div> */}
          <h2>Explore Our Products</h2>
        {/* </div> */}
        <div>
          <Post posts={posts} />
        </div>
        <div className='button'>
          <Button variant="contained" color="secondary" type='submit' className={classes.button} >
            READ MORE
          </Button>
        </div>
      </section>
    )
  }
}



function mapStateToProps(state) {
  return {
    posts: state.posts.posts
  }
}


export default connect(mapStateToProps, { fetchPosts })(PostList);



const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: '95%',
    height: 60,
  }
}));

