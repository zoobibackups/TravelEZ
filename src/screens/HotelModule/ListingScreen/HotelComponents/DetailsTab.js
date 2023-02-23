import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {wp} from '../../../../constants/scaling';
import {colors, fonts} from '../../../../constants/theme';
import {textStyles} from '../../../../styles/textStyles';

const DetailsTab = ({item}) => {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      {item.data.map((item_para, index) => {
        return (
          <View style={styles.mainCardView}>
            <Text style={styles.header}>{item_para.title}</Text>
            <Text style={styles.InfoiLabeltext}>{item_para.paragraphs}</Text>
          </View>
        );
      })}
      <View style={styles.mainCardView}>
        <Text style={styles.header}>Policy</Text>
        <Text style={styles.InfoiLabeltext}>{item.policy}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailsTab;
const styles = StyleSheet.create({
  mainCardView: {
    elevation: 5,
    padding: wp(2),
    borderRadius: wp(2),
    backgroundColor: '#fff',
    margin: wp(2),
    width: wp(96),
  },
  header: {
    fontSize: RFValue(16),
    backgroundColor: colors.primaryColor,
    color: '#fff',
    paddingVertical: wp(2),
    borderRadius: wp(1),
    fontFamily: fonts.Bold,
    includeFontPadding: false,
    paddingLeft: wp(5),
  },
  InfoiLabeltext: {
    ...textStyles.Label,
    fontSize: RFValue(12),
    fontFamily: fonts.Medium,
    marginTop: wp(2),
    color: colors.textPrimaryColor,
  },
});
