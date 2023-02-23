import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {wp} from '../../constants/scaling';
import {colors} from '../../constants/theme';
import {textStyles} from '../../styles/textStyles';
const DirecttionTab = ({navigation, route}) => {
  let item = route.item;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text
          style={{
            ...textStyles.heading,
            padding: wp(5),
            fontSize: RFValue(16),

            textAlign: 'justify',
          }}>
          Directions
        </Text>
        <Text
          style={{
            ...textStyles.Label,
            paddingTop: 0,
            padding: wp(5),
            fontSize: RFValue(13),

            textAlign: 'justify',
          }}>
          {item}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DirecttionTab;
