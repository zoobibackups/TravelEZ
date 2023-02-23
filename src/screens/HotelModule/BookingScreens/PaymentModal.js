import {CardField, confirmPayment} from '@stripe/stripe-react-native';
import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {RFValue} from 'react-native-responsive-fontsize';
import Cards from '../../../assets/svgs/cards.svg';
import CustomButton from '../../../components/CustomButton';
import {hp, wp} from '../../../constants/scaling';
import {colors, fonts} from '../../../constants/theme';
import {textStyles} from '../../../styles/textStyles';
const PaymentModal = ({
  isModalVisible,
  paymentIntentMine,
  setIsModalVisible,
}) => {
  const [uploadiing, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [card_details, setCardDetails] = useState(null);
  const onBookingPress = async () => {
    if (card_details == null) {
      setError('Please enter card details');
      return;
    }
    setUploading(true);
    setError('');
    const {paymentIntent, error} = await confirmPayment(paymentIntentMine, {
      paymentMethodType: 'Card',
      paymentMethodData: {
        card_details,
      },
    });

    if (error) {
      setError(error.localizedMessage);
      setUploading(false);
    } else if (paymentIntent) {
      setError('');
      setIsModalVisible();
      setUploading(false);
    }
  };

  return (
    <Modal
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}
      animationInTiming={500}
      animationOutTiming={500}
      isVisible={isModalVisible}
      onBackdropPress={() => {
        setIsModalVisible(false);
      }}>
      <View style={styles.main_view}>
        <Text
          style={{
            ...styles.upLoadText,
            fontSize: RFValue(14),
            alignSelf: 'flex-start',
            textAlign: 'left',
            marginLeft: wp(2),
          }}>
          Enter your card details
        </Text>
        <CardField
          postalCodeEnabled={false}
          placeholders={{
            number: 'xxxx xxxx xxxx xxxx',
          }}
          cardStyle={{
            backgroundColor: '#ffffff',
            textColor: colors.primaryColor,
            borderWidth: 2,
            borderColor: colors.secondaryColor,
            borderRadius: wp(2),
            overflow: 'hidden',
            width: wp(96),
            elevation: 10,
            flexDirection: 'column',
            fontFamily: fonts.Bold,
            fontSize: RFValue(18),
            textErrorColor: colors.deleteIconColor,
          }}
          style={{
            width: wp(92),
            alignSelf: 'center',
            height: hp(10),
            borderRadius: wp(2),
            overflow: 'hidden',
            elevation: 10,
            flexDirection: 'column',
            fontFamily: fonts.Bold,
            fontSize: RFValue(12),
            backgroundColor: '#0000',
            marginTop: wp(3),
          }}
          onCardChange={cardDetails => {
            setCardDetails(cardDetails);
          }}
          onFocus={focusedField => {
            console.log('focusField', focusedField);
          }}
        />

        <Text
          style={{
            ...styles.upLoadText,
            fontSize: RFValue(11),
            fontFamily: fonts.Medium,
            alignSelf: 'flex-start',
            marginVertical: wp(2),
            marginLeft: wp(2),
            color: colors.errorTextColor,
            textAlign: 'justify',
          }}>
          {error}
        </Text>

        <View style={{alignSelf: 'center'}}>
          <Text
            style={{
              ...styles.upLoadText,
              fontSize: RFValue(13),
              fontFamily: fonts.Medium,

              alignSelf: 'flex-start',
              textAlign: 'left',
            }}>
            We Accept the following
          </Text>
          <Cards width={wp(96)} height={hp(5)} />
        </View>

        <CustomButton
          title={'Submit'}
          onPress={() => {
            onBookingPress();
          }}
          backgroundColor={colors.secondaryColor}
        />
      </View>
      {uploadiing && (
        <View style={styles.loadingView}>
          <ActivityIndicator color={colors.primaryColor} size={'large'} />
        </View>
      )}
    </Modal>
  );
};
export default PaymentModal;

const styles = StyleSheet.create({
  text: {
    ...textStyles.smallheading,
    fontSize: RFValue(12),
    color: colors.dark_primary_color,
    backgroundColor: '#0000',
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
  textplaceholder: {
    ...textStyles.smallheading,
    fontSize: RFValue(12),
    color: colors.text_primary_color,
    backgroundColor: '#0000',

    includeFontPadding: false,
    textAlign: 'left',
  },
  Row: {
    borderWidth: 1,
    borderRadius: RFValue(5),
    borderColor: colors.divide_color,
    paddingHorizontal: RFValue(10),
    height: RFValue(40),
    alignItems: 'center',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  main_view: {
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: RFValue(20),
    paddingTop: RFValue(20),
    borderTopRightRadius: RFValue(20),
  },
  upLoadText: {
    ...textStyles.smallheading,
    paddingHorizontal: wp(2),
    alignSelf: 'center',
    color: colors.textPrimaryColor,
    textAlign: 'center',
  },
  cancel_button: {
    marginTop: wp(2),
    marginBottom: wp(3),
    borderRadius: RFValue(14),
    height: wp(10),
    alignItems: 'center',
    width: wp(80),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: '#0001',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(40),
    borderRadius: wp(2),
    height: wp(20),
  },
  iconbox: {
    width: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
    height: wp(2),
  },
  loadingView: {
    width: wp(100),
    height: hp(38),
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0004',
  },
});
