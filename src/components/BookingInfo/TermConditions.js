import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { wp } from '../../constants/scaling';
import { colors } from '../../constants/theme';
import { textStyles } from '../../styles/textStyles';
const TermAndConditions = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Text
                    style={{
                        ...textStyles.smallheading,
                        paddingHorizontal: wp(5),
                        paddingTop: wp(5),
                        fontSize: RFValue(15),
                        lineHeight: RFValue(15) * 1.5,
                        textAlign: 'center',
                        textAlignVertical: 'center'
                    }}>
                    Will Be provided on request{'\n'}
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default TermAndConditions;
