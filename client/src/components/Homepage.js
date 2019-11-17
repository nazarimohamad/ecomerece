import React from 'react';
import HeroCarousel from './HeroCarousel';
import PostList from '../containers/PostList';


const Homepage = () => {
	return (
		<div className='homepage'>
			<HeroCarousel />
			<PostList />
		</div>
	);
}

export default Homepage;