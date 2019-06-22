import React, { Component} from 'react';
import { View, TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../prevision/styles';
import Header from '../../components/Header';
import PropTypes from 'prop-types';
import apiDark from '../../services/apiDark';

const TabIcon = ({tintColor}) => <Icon name="building" size={20} color={tintColor}/>

TabIcon.propTypes = {
	tintColor: PropTypes.string.isRequired,
}

export default class Prevision extends Component {
	static navigationOptions = {
		tabBarIcon: TabIcon
	}

	state = {
		loading: false,
		error: false,
	}

	prevision = async () => {
		try {
			//this.setState({loading: true})
			// Coordenadas de SM
			 const prev = await apiDark.get('/-29.6914,-53.8008');

		} catch (error) {
			console.tron.log("ERRO AO BUSCAR DADOS DA API DARKSKY");
		}
	}

	render () {
		const { loading, error } = this.state;
		return (
			<View>
				<Header title="Previsão"/>
				{error && <Text style={styles.error}>Houve um erro </Text>}
				<TouchableOpacity style={styles.button} onPress={() => {}}>
					{ loading ? <ActivityIndicator size="small" color="FFF"/> :
						<Text style={styles.buttonText} onPress={this.prevision} >Buscar</Text>
					}
				</TouchableOpacity>
			</View>
		)
	}
}
