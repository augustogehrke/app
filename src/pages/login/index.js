import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, AsyncStorage, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import apiDark from '../../services/apiDark';
import '../../config/reactotron';

//console.tron.log("hdfd");

export default class Login extends Component {
	static propTypes = {
		navigation: PropTypes.shape({navigate: PropTypes.func,}).isRequired,
	}

	state = {
		userName: '',
		userPassword: '',
		loading: false,
		error: false,
	}

	prevision = async () => {
		try {
			const prev = await apiDark.get('/37.8267,-122.4233');
			return prev;
		} catch (error) {
			console.tron.log("ERRO AO BUSCAR DADOS DA API DARKSKY");
		}
	}

	saveUser = async (userName, userPassword) => {
		await AsyncStorage.setItem("@gernte:userName", userName);
		await AsyncStorage.setItem("@gernte:userPassword", userPassword);
	}

	signIn = async () => {
		const { userName, userPassword } = this.state;
		//Faz uma request com o axios
		//this.prevision();

		// Salva os dados do usuário no banco local
		await this.saveUser(userName, userPassword);
		const a = await AsyncStorage.getItem("@gernte:userName");
		//console.tron.log(a);

		// Para mostrar o loading
		//this.setState({loading: true});

		//Direciona para outra tela
		const { navigation } = this.props;
		navigation.navigate('User');

		// Faz mostrar mensagem de erro em tela
		//this.setState({error: true});
	};

	render() {
		const { userName, userPassword, loading, error } = this.state;

		return (
			<View style={styles.container}>
				<Text style={styles.title}>Bem vindo!</Text>
				<Text style={styles.text}>Faz teu login catofleiro!</Text>

				{error && <Text style={styles.error}>Houve um erro </Text>}

				<View style={styles.form}>
					<TextInput
						style={styles.input}
						autoCapitalize="none"
						autoCorrect={false}
						placeholder="Usuário"
					 	underlineColorAndroid="transparent"
						value={userName}
						onChangeText={text => this.setState({ userName: text})}
					></TextInput>
					<TextInput style={styles.input}
					  autoCapitalize="none"
					  autoCorrect={false}
					  placeholder="Senha"
						underlineColorAndroid="transparent"
						value={userPassword}
						secureTextEntry={true}
						onChangeText={text => this.setState({ userPassword: text})}
					></TextInput>
				</View>
				<TouchableOpacity style={styles.button} onPress={() => {}}>
					{ loading ? <ActivityIndicator size="small" color="FFF"/> :
						<Text style={styles.buttonText} onPress={this.signIn} >Entrar</Text>
					}
				</TouchableOpacity>
			</View>
		);
	}
}
