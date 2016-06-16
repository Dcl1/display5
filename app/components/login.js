import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch'
	},

	button: {
		width: 100,
		height: 30,
		padding: 10,
		backgroundColor: 'lightgray',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 3
	},

	text: {
		color: "#000"
	}
});

export default class Counter extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		const { selectprofilethis, namer } = this.props;

		return (
			<View style={styles.container}>
				<Text style={styles.text}> {namer} </Text>
				<View>
				  <TouchableOpacity onPress={() => selectprofilethis(1, "Jeff")} style={styles.button}>
					  <Text> Jeff </Text>
				  </TouchableOpacity>
				</View>
				<View>
				  <TouchableOpacity onPress={() => selectprofilethis(2, "Dave")} style={styles.button}>
					  <Text> Dave </Text>
				  </TouchableOpacity>
				</View>
				<View>
				  <TouchableOpacity onPress={Actions.loginConfirm} style={styles.button}>
					  <Text> Next </Text>
				  </TouchableOpacity>
				</View>
			</View>
		);
	}

}