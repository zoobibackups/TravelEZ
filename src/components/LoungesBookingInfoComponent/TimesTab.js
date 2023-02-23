import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {wp} from '../../constants/scaling';
import {colors} from '../../constants/theme';
import {textStyles} from '../../styles/textStyles';
const TimesTab = ({navigation, route}) => {
  let item = route.item;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <View style={{padding: wp(5)}}>
          <Text style={{...textStyles.heading}}>Time</Text>
          <Text style={{...textStyles.Label}}>
            Open from{' '}
            <Text style={{...textStyles.Label, color: 'deeppink'}}>
              {item.openingtime}
            </Text>{' '}
            to{' '}
            <Text style={{...textStyles.Label, color: 'deeppink'}}>
              {item.closingtime}
            </Text>
          </Text>
          <Text style={{...textStyles.Label, textAlign: 'justify'}}>
            {item.paragraph}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TimesTab;
