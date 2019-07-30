/**
 * Sample React Native App https://github.com/facebook/react-native
 * 
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { 
  StyleSheet, 
  View, 
  Image
} from 'react-native';
import { 
  Text, 
  Card, 
  Divider
} from 'react-native-elements';

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

export default class ForecastCard extends Component {

	render() {
		let time;

		var date = new Date(this.props.detail.valid_date);
		time = date.getUTCDay();

		return (
			<Card containerStyle={styles.card}>
				<Text style={styles.notes}>{this.props.location}  -  {weekDays[time]}</Text>
				<View style={styles.topDivStyle}>
					<Image style={styles.imageStyle} source={{uri:"https://www.weatherbit.io/static/img/icons/" + this.props.detail.weather.icon + ".png"}} />
          <Text style={styles.temp}>{this.props.detail.temp} &#176;</Text>
				</View>
        
				<Divider style={styles.divStyle} />
				
				<View style={styles.bottomDivStyle}>
					<Text style={styles.notes}>{this.props.detail.weather.description}</Text>
				</View>
        <View style={styles.bottomDivStyle}>
          <Text style={styles.notes}>Precipitaton: {this.props.detail.pop} &#37;</Text>
        </View>
			</Card>
 
		);
	}
}

const styles = StyleSheet.create({
	card:{
		backgroundColor:'#ff6357',
		borderWidth:0,
		borderRadius:20
	},
	notes: {
		fontSize: 18,
		color:'#fff',
		textTransform:'capitalize'
	},
  topDivStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  temp: {
		fontSize:38,
		color:'#fff'
	},
  bottomDivStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  divStyle: {
    backgroundColor: "#dfe6e9",
    marginVertical: 20
  },
  imageStyle: {
    width: 100,
    height: 100
  }
});