import React from 'react';
import './style.scss'

class HeroCarousel extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			activeID: 0,
			// wrapperStyle: {
			// 	backgroundImage: `url('${data[0].img}')`
      // backgroundColor: 'lightcoral',
			// },
			// panelStyle: {
			// 	background: '#f6f5f6'
			// },
			buttonHover: false,
			buttonStyle: {
				color: '#ffffff'
			}
		};
	}
	_changeActive(id) {
		this.setState({
			activeID: id,
			// wrapperStyle: {
				// backgroundImage: `url('${data[id].img}')`
			// },
			// panelStyle: {
			// 	backgroundColor: data[id].colour
			// }
		});
	}
	// setInterval(() => {
	// 	_changeActive()
	// }, 1000)
	_buttonColour() {
		if(!this.state.buttonHover){
			this.setState({
				buttonHover: true,
				buttonStyle: {
					color: data[this.state.activeID].colour
				}
			});
		} else {
			this.setState({
				buttonHover: false,
				buttonStyle: {
					color: '#ffffff'
				}
			});
		}
	}
	render() {
		return (
      // <div className='one'>
			<section className="wrapper" style={this.state.wrapperStyle}>
				<Selectors
					data={data}
					activeID={this.state.activeID}
					_changeActive={this._changeActive.bind(this)}
				/>
				<Panel
					data={data[this.state.activeID]}
					panelStyle={this.state.panelStyle}
					buttonStyle={this.state.buttonStyle}
					_buttonColour={this._buttonColour.bind(this)}
				/>
			</section>
      // </div>
		);
	}
}
export default HeroCarousel;

class Panel extends React.Component {
	render() {
		return (
      <div className='carouselItem' style={{display: 'flex', flexDirection: 'row'}}>
        <aside className="panel" style={this.props.panelStyle}>
          <h2 className="panel-header">{this.props.data.header}</h2>
          <p className="panel-info">{this.props.data.body}</p>
          <button className="panel-button"
            style={this.props.buttonStyle}
            onMouseEnter={this.props._buttonColour}
            onMouseLeave={this.props._buttonColour}>
            Read More
          </button>
        </aside>
        <aside className='image' style={{width: '60%', height: '100%'}} >
          <img src={this.props.data.img} alt={this.props.data.img}/>
        </aside>
      </div>
		);
	}
}
class Selectors extends React.Component {

	_handleClick(e) {
		if (this.props.id !== this.props.activeID) {
			this.props._changeActive(this.props.id);
		} else {
			return;
		}
	}
	render() {
		return (
			<div className="selectors">
				{this.props.data.map((item) =>
					<Selector
						key={item.id}
						id={item.id}
						_handleClick={this._handleClick}
						_changeActive={this.props._changeActive}
						activeID={this.props.activeID}
					/>
				)}
			</div>
		);
	}
}
class Selector extends React.Component {
	render() {
		let componentClass = 'selector';
		if (this.props.activeID === this.props.id) {
			componentClass = 'selector active';
		}
		return (
			<div className={componentClass} onClick={this.props._handleClick.bind(this)}></div>
		);
	}
}

const data = [{
	id: 0,
	header: 'Spring-Summer collections',
	body: 'Chillwave knausgaard chambray flannel tumblr, narwhal microdosing blog...',
	colour: '#242846',
	img: require('../images/shoe1.jpeg')
}, {
	id: 1,
	header: 'Post-ironic Disrupt',
	body: 'Swag biodiesel disrupt retro fashion, salvia food truck kitsch wolf DIY...',
	colour: '#ba9077',
	img: require('../images/shoe2.jpeg')
}, {
	id: 2,
	header: 'Lumber-Sexual Roof Party ',
	body: 'Flexitarian 3 wolf moon cliche, migas scenester street art...',
	colour: '#1ABC9C',
	img: require('../images/shoe3.jpeg')
}, {
	id: 3,
	header: 'Vegan hoodie trust fund',
	body: 'Farm-to-table tousled try-hard, normcore ethical tilde iPhone...',
	colour: '#C0392B',
	img: require('../images/shoe4.jpeg')
}, {
	id: 4,
	header: 'cliche craft beer',
	body: 'Tote bag flannel normcore polaroid +1. Quinoa actually 90s sustainable...',
	colour: '#513B56',
	img: require('../images/shoe5.jpeg')
}];


