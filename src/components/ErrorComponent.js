import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { wp } from '../constants/scaling';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../constants/theme';
import { textStyles } from '../styles/textStyles';
import CustomButton from './CustomButton';
import CustomHeader from './CustomHeader';
const ErrorComponent = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <CustomHeader
                title={'Error'}
                show_backButton={true}
                isdrawer={false}
                onPress={() => navigation.goBack()}
            />
            <View
                style={{
                    flex: 1,
                    alignItems: 'center'
                }}>
                <View
                    style={{
                        backgroundColor: '#fff',
                        width: wp(40),
                        marginTop: wp(20),
                        height: wp(40),
                        borderRadius: wp(40)
                    }}>
                    <MaterialIcons
                        name="error"
                        size={wp(40)}
                        color={colors.errorTextColor}
                    />
                </View>
                <Text
                    style={{
                        ...textStyles.heading,
                        color: colors.errorTextColor,
                        textAlign: 'center'
                    }}>
                    OPP's
                    {'\n'}Something went wrong
                </Text>
                <Text
                    style={{
                        ...textStyles.smallheading,
                        padding: wp(15),
                        textAlign: 'center'
                    }}>
                    Look like something went completely wrong! but don't worry
                    It can happen to the best of us, and it just happen to you
                </Text>
                <CustomButton
                    onPress={() => navigation.goBack()}
                    title="Go Back"
                />
            </View>
        </SafeAreaView>
    );
};

export default ErrorComponent;
