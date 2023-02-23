import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import CustomTextInput from '../../components/CustomInput';
import {wp} from '../../constants/scaling';
import {colors} from '../../constants/theme';
import {textStyles} from '../../styles/textStyles';
const ContactUsScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <CustomHeader
        title={'Contact Us'}
        show_backButton={true}
        isdrawer={true}
        onPress={() => navigation.openDrawer()}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.cardView}>
          <Text style={styles.heading}>HOW TO FIND US</Text>
          <Text style={styles.parapgraph}>
            Parking zone Ltd Suite 8F,Kelvin House,
          </Text>
          <Text style={styles.parapgraph}>
            Kelvin Way, Crawley West Sussex United Kingdom RH10 9WE
          </Text>
          <Text style={styles.parapgraph}>020 4511 4171</Text>

          <Text style={styles.parapgraph}>hello@travelez.co.uk</Text>
        </View>
        <View style={styles.cardView}>
          <Text style={styles.heading}>Contact Us</Text>
          <Text style={styles.parapgraph}>
            Subcribe to receive new listing with good price.
          </Text>
          <CustomTextInput
            label={'Name'}
            placeholder={'Your Name'}
            value={name}
            onChangeText={text => setName(text)}
          />
          <CustomTextInput
            label={'Email'}
            placeholder={'Your Email'}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <CustomTextInput
            label={'Message'}
            multiline={true}
            placeholder={'Your Message'}
            value={message}
            onChangeText={text => setMessage(text)}
          />
          <CustomButton
            title={'Send Message'}
            buttonStyle={{width: wp(92), height: wp(14)}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactUsScreen;
const styles = StyleSheet.create({
  cardView: {
    padding: wp(1),
    margin: wp(3),
    borderRadius: wp(2),
    elevation: 5,
    backgroundColor: '#fff',
  },
  parkingTypecardView: {
    padding: wp(5),
    margin: wp(3),
    borderRadius: wp(2),
    elevation: 5,
    backgroundColor: colors.primaryColor,
  },
  heading: {
    ...textStyles.smallheading,
    paddingBottom: wp(2),
    fontSize: RFValue(16),
    lineHeight: RFValue(16) * 1.5,
    textAlign: 'justify',
  },
  parapgraph: {
    ...textStyles.Label,
    color: colors.textPrimaryColor,
    fontSize: RFValue(12),
    lineHeight: RFValue(12) * 1.5,
    textAlign: 'justify',
  },
});
