import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { wp } from '../../constants/scaling';
import { colors } from '../../constants/theme';
import { textStyles } from '../../styles/textStyles';
const Note = ({ navigation, route }) => {
    let item = route.item.split(',');
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Text
                    style={{
                        ...textStyles.Label,
                        paddingHorizontal: wp(5),
                        paddingTop: wp(5),
                        fontSize: RFValue(18),
                        lineHeight: RFValue(15) * 1.5,
                        textAlign: 'justify'
                    }}>
                    Important Information:{'\n'}
                </Text>
                {item.map((item, index) => {
                    return (
                        <Text
                            key={`${index}`}
                            style={{
                                ...textStyles.Label,
                                paddingHorizontal: wp(5),
                                fontSize: RFValue(12),

                                textAlign: 'justify'
                            }}>
                            {`\u2022`} {item}
                            {'\n'}
                        </Text>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Note;
