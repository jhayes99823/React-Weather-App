/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { 
  FlatList
} from 'react-native';
import ForecastCard from './components/ForecastCard';


export default class App extends React.Component {

	constructor(props){
		super(props);
		
		this.state = {
			latitude: 0,
			longitude: 0,
			forecast: [],
			error:''
		};
	}

	componentDidMount(){
		this.getLocation();
	}

	getLocation(){
		navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState(
					(prevState) => ({
					//latitude: position.coords.latitude, 
					//longitude: position.coords.longitude
					latitude: 39.0997222,
					longitude: -94.5783333
					}), () => { this.getWeather(); }
				);
			},
			(error) => this.setState({ forecast: error.message }),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
		);
	}

	getWeather(){

		let url = 'https://api.weatherbit.io/v2.0/forecast/daily?lat='+ this.state.latitude + '&lon=' + this.state.longitude + '&key=781a693bef5b4767a91405fbeee1b9fb&days=5&units=I';

		fetch(url)
		.then(response => response.json())
		.then(data => {
			this.setState((prevState, props) => ({
				forecast: data
			}));
		})
	}

	render() {
		return (
			<FlatList data={this.state.forecast.data} style={{marginTop:20}} keyExtractor={item => item.valid_date} renderItem={({item}) => <ForecastCard detail={item} location={this.state.forecast.city_name} />} />
		);
	}
}