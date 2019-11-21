import React, { useEffect, useState } from 'react';
import './style.scss';

import img from "../images/shoe1.jpeg"
class AllPost extends React.Component {

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, getPosts } = this.props;
    return (
      <div className='allpost'>
        <div className='allpost_hero'>
          <h1>the best online shop for shoes</h1>
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