import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomHeader from '../../components/CustomHeader';
import {wp} from '../../constants/scaling';
import {colors} from '../../constants/theme';
import {textStyles} from '../../styles/textStyles';
import {aboutsus} from './data';

const TermsAndCondiditionsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <CustomHeader
        title={'Terms And Condidtions'}
        show_backButton={true}
        isdrawer={true}
        onPress={() => navigation.openDrawer()}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {aboutsus.map((item, index) => (
          <View key={`${index}`} style={styles.cardView}>
            <Text style={styles.heading}>
              {item.id}. {item.heading}
            </Text>

            <Text style={styles.parapgraph}>{item.paragraph}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsAndCondiditionsScreen;
const styles = StyleSheet.create({
  cardView: {
    padding: wp(5),
    margin: wp(3),
    borderRadius: wp(2),
    elevation: 5,
    backgroundColor: '#fff',
  },

  heading: {
    ...textStyles.smallheading,

    fontSize: RFValue(16),
    lineHeight: RFValue(16) * 1.5,
    textAlign: 'justify',
  },
  parapgraph: {
    ...textStyles.Label,
    paddingTop: wp(2),
    fontSize: RFValue(12),
    lineHeight: RFValue(12) * 1.5,
    textAlign: 'justify',
  },
});
