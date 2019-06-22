import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import Login from './pages/login';
import Temperature from './pages/temperature';
import Prevision from './pages/prevision';
import colors from './styles/colors';

const Routes = (userLogged = false) => createAppContainer(createSwitchNavigator({
		Login,
		User: createBottomTabNavigator({
			Temperature,
			Prevision
		}, {
			tabBarOptions: {
				showIcon: true,
				showLabel: false,
				activeTintColor: colors.white,
				inactiveTintColor: colors.whiteTransparent,
				style: {
					backgroundColor: colors.secundary,
				}
			}
		}),
	}, {
		initialRouteName: userLogged ? 'User' : 'Login'
	}),
);

export default Routes;
