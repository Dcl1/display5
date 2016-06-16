import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import * as reducers from '../reducers';

import Login from './login';
import LoginConfirm from '../components/loginConfirm';

const RouterWithRedux = connect()(Router);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


module.exports = React.createClass({
	render: function() {
		return (
			<Provider store={store}>
				<RouterWithRedux>
					<Scene key="root">
						<Scene key="login">
							<Scene key="pageLogin" component={Login} title="Login" initial={true} />
							<Scene key="loginConfirm" component={LoginConfirm} title="Login Confirm" />
						</Scene>
					</Scene>
				</RouterWithRedux>
			</Provider>
		);
	}
});