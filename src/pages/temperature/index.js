import React, { Component} from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import styles from '../temperature/styles';
import Header from '../../components/Header';
import PropTypes from 'prop-types';


const TabIcon = ({tintColor}) => <Icon name="list-alt" size={20} color={tintColor}/>

TabIcon.propTypes = {
	tintColor: PropTypes.string.isRequired,
}

export default class Temperature extends Component {
	static navigationOptions = {
		tabBarIcon: TabIcon
	}

	render () {
		return (
			<View>
				<Header title="Temperatura"/>
			</View>
		)
	}
}
