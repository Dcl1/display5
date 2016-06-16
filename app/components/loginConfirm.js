import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';


const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	}
});


class Counter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.login.name);
		const { selectprofilethis, namer } = this.props;
		return (
			<View style={styles.container}>
				<Text>{this.props.login.name} </Text>
			</View>
		);
	}

}

export default connect(({login}) => ({login}))(Counter);