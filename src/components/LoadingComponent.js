import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { wp } from '../constants/scaling';
import { colors } from '../constants/theme';
import { textStyles } from '../styles/textStyles';
import CustomHeader from './CustomHeader';
const LoadingComponent = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
            <CustomHeader
                title={'Loading'}
                show_backButton={true}
                isdrawer={false}
                onPress={() => navigation.goBack()}
            />
            {/* <LinearGradient
                colors={colors.GradientColors}
                style={styles.linearGradient}> */}
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                {/* <Image
                    resizeMethod={'auto'}
                    source={require('../assets/images/app_logo.png')}
                    style={{
                        width: wp(30),
                        height: wp(30),
                        marginVertical: wp(10),
                        resizeMode: 'center'
                    }}
                /> */}
                <Image
                    resizeMethod={'auto'}
                    source={require('../assets/images/loading.gif')}
                    style={{
                        width: wp(30),
                        height: wp(30),
                        marginVertical: wp(10),
                        resizeMode: 'center'
                    }}
                />

                <Text
                    style={{
                        ...textStyles.Label,
                        // color: '#fff',
                        marginTop: 50
                    }}>
                    Please wait ...{' '}
                </Text>
            </View>
            {/* </LinearGradient> */}
        </SafeAreaView>
    );
};

export default LoadingComponent;

var styles = StyleSheet.create({
    linearGradient: {
        flex: 1
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent'
    }
});
