import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SvgIcon from '@material-ui/core/SvgIcon';
import './style.scss';

import img from "../images/shoe1.jpeg"
class AllPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      lift: false
    })
  }

  componentDidMount() {
    this.props.getPosts();
    setInterval(() => {
      this.setState({
        lift: !this.state.lift
      })
    }, 800);
  }

  render() {
    const {lift} = this.state
    const { posts, getPosts } = this.props;
    return (
      <div className='allpost'>
        <div className='allpost_hero'>
          <h1>the best online shop for shoes</h1>
          <div className={lift ? 'lift' : 'left'}>
            <ExpandMoreIcon />
            <ExpandMoreIcon />
          </div>
        </div>
        <div className='container'>
          {posts.map(post => (
            <div className='item'>
              <img
                src={img}
                alt={post.name}
                />
              <h1>{post.name}</h1>
              <p>$ {post.price}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default AllPost;