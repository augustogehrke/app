import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles'

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		borderRadius: metrics.baseRadius,
		height: 44,
		marginTop: metrics.baseMargin,
		justifyContent: 'center',
		alignItems: 'center'
	},
	error: {
		color: colors.danger,
		textAlign: 'center',
		marginTop: metrics.baseMargin,
	},
	buttonText: {
		color: colors.white,
		fontWeight: 'bold',
		fontSize: 16
	}
});

export default styles;
