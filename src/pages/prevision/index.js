import React, { Component} from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import styles from '../prevision/styles';
import Header from '../../components/Header';
import PropTypes from 'prop-types';


const TabIcon = ({tintColor}) => <Icon name="building" size={20} color={tintColor}/>

TabIcon.propTypes = {
	tintColor: PropTypes.string.isRequired,
}

export default class Prevision extends Component {
	static navigationOptions = {
		tabBarIcon: TabIcon
	}

	render () {
		return (
			<View>
				<Header title="Previsão"/>
			</View>
		)
	}
}
