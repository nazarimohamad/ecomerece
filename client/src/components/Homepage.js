import React from 'react';
import HeroCarousel from './HeroCarousel';
import PostList from '../containers/PostList';
import Quotes from './Quotes';
import KindOfShoes from './KindOfShoes';
import SocialMedia from './SocialMedia';
import Footer from './Footer';
// import Navbar from './Navbar';


const Homepage = () => {
	return (
		<div className='homepage'>
			{/* <Navbar /> */}
			<HeroCarousel />
			<PostList />
			<Quotes />
			<KindOfShoes />
			<SocialMedia />
			<Footer />
		</div>
	);
}

export default Homepage;