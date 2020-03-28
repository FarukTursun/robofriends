import React, {Component} from 'react';
import Cardlist from '../components/cardlist.js';
// import {robots} from './robots.js';/*'robots' must be destructured like this '{ robots }' or else it cant be imported into this file*/
import SearchBox from '../components/SearchBox.js'
import Scroll from '../components/Scroll.js'
import ErrorBoundry from '../components/ErrorBoundry.js'



class App extends Component{
	constructor(){
		super()
		this.state={
			robots: [],

			searchfield:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=>this.setState({robots: users}));
	}

	OnsearchChange=(event)=>{
		this.setState({searchfield:event.target.value})
	}
	render(){
		const filteredRobots=this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})

		if(this.state.robots.length===0){
			return 'Loading'
		} else {

			return (
			<div>
				<h1 className="tc">RoboFriends</h1>
				<SearchBox searchChange={this.OnsearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<Cardlist robots={filteredRobots}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		);

		}
		
	}
	
}

export default App;