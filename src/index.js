import React, { Component } from 'react';
import createNavigator from './routes';
import { AsyncStorage } from 'react-native';
import './config/reactotron';

export default class App extends Component {
	state = {
		userChecked: false,
		userLogged: false,
	}

	async componentDidMount() {
		const userName = await AsyncStorage.getItem("@gernte:userName");

		this.setState({
			userChecked: true,
			userLogged: !!userName,
		});
	}

	render() {
		const { userChecked, userLogged } = this.state;

		if (!userChecked) return null;

		const Routes = createNavigator(userLogged);

		return <Routes/>;
	}
}

