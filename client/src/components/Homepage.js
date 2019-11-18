import React from 'react';
import HeroCarousel from './HeroCarousel';
import PostList from '../containers/PostList';
import Quotes from './Quotes';


const Homepage = () => {
	return (
		<div className='homepage'>
			<HeroCarousel />
			<PostList />
			<Quotes />
		</div>
	);
}

export default Homepage;