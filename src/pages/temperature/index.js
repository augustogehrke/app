import React, { Component} from 'react';
import { View, TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../temperature/styles';
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

	state = {
		loading: false,
		error: false,
	}

	action = async () => {
		try {
			this.setState({error: true})

		} catch (error) {
			console.tron.log("ERRO");
		}
	}

	render () {
		const { loading, error } = this.state;
		return (
			<View>
				<Header title="Temperatura"/>
				{error && <Text style={styles.error}>Houve um erro </Text>}
				<TouchableOpacity style={styles.button} onPress={this.action}>
					{ loading ? <ActivityIndicator size="small" color="FFF"/> :
						<Text style={styles.buttonText} onPress={() => {}} >Buscar</Text>
					}
				</TouchableOpacity>
			</View>
		)
	}
}
