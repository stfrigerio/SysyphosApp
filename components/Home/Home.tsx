import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import { MonoText } from '../shared/StyledText';
import { Text, View } from '../Themed';

export default function Home() {
	return (
		<ImageBackground 
			source={require('@/assets/images/background.png')}
			style={styles.backgroundImage}
			resizeMode="contain" 
		>
			<View style={[styles.container, { backgroundColor: 'transparent' }]}>
				<View>
					<View
						darkColor="rgba(255,255,255,0.05)"
						lightColor="rgba(0,0,0,0.05)">
						<MonoText>Home</MonoText>
					</View>
				</View>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		flex: 1,
	},
});