import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

class Header extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		navigation: PropTypes.shape({navigate: PropTypes.func,}).isRequired,
	}

	signOut = async () => {
		const { navigation } = this.props;
		await AsyncStorage.clear();
		navigation.navigate('Login');
	}

	render() {
		const {title} = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.left}/>
				<Text style={styles.title}>{title}</Text>
				<TouchableOpacity onPress={this.signOut}>
					<Icon size={20} style={styles.icon} name="exchange"/>
				</TouchableOpacity>
			</View>
		);
	}
}

export default withNavigation(Header);
