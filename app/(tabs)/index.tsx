import { StyleSheet } from 'react-native';

import Home from '@/components/Home/Home';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<Home />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
