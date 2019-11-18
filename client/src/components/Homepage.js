import React from 'react';
import HeroCarousel from './HeroCarousel';
import PostList from '../containers/PostList';
import Quotes from './Quotes';
import KindOfShoes from './KindOfShoes';


const Homepage = () => {
	return (
		<div className='homepage'>
			<HeroCarousel />
			<PostList />
			<Quotes />
			<KindOfShoes />
		</div>
	);
}

export default Homepage;