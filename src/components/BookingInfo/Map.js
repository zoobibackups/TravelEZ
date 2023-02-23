import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { wp } from '../../constants/scaling';
import { colors } from '../../constants/theme';
const Map = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121
                    }}></MapView>
            </View>
        </SafeAreaView>
    );
};

export default Map;
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: wp(100),
        width: wp(100),
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
});
