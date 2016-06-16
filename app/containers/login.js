'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Login from '../components/login';
import * as loginActions from '../actions/loginActions';
import { connect } from 'react-redux';

class LoginApp extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { state, actions } = this.props;
		//console.log(state);
		return (
			<Login 
				namer={state.login.name}
				{...actions} />
		);
	}
}

export default connect(state => ({
		state: state
	}),
	(dispatch) => ({
		actions: bindActionCreators(loginActions, dispatch)
	})
)(LoginApp);