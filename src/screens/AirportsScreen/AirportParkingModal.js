import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Modal from 'react-native-modal';
import { RFValue } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { hp, wp } from '../../constants/scaling';
import { colors } from '../../constants/theme';
import { textStyles } from '../../styles/textStyles';
const AirportParkingModal = ({ isModalVisible, setIsModalVisible, item }) => {
    return (
        <Modal
            style={{
                justifyContent: 'flex-end',
                margin: 0,
                bottom: 0,
                marginTop: hp(40),
                maxHeight: hp(60)
            }}
            useNativeDriver={true}
            hideModalContentWhileAnimating={true}
            backdropTransitionOutTiming={0}
            animationInTiming={500}
            animationOutTiming={500}
            isVisible={isModalVisible}
            onBackdropPress={() => setIsModalVisible(false)}>
            <View style={styles.main_view}>
                <Text style={styles.upLoadText}>{item.name} </Text>
                <TouchableOpacity
                    onPress={() => setIsModalVisible(false)}
                    style={{
                        position: 'absolute',
                        right: 0,
                        paddingHorizontal: 10
                    }}>
                    <AntDesign
                        name="closecircle"
                        size={wp(5)}
                        color={colors.deleteIconColor}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Text style={styles.heading}>Cardiff Airport</Text>
                    <Text style={styles.Label}>
                        Cardiff Airport serves over 1.6 million passengers
                        annually, with 50 direct routes and over 900 connecting
                        destinations. Driving your own vehicle to the airport is
                        a popular option, so it’s good to book your Cardiff
                        Airport parking in advance.
                    </Text>
                    <Text style={styles.Label}>
                        You’ll also want peace of mind that your booking is
                        secure and that your car will be safe while you are
                        away. Here at ParkingZone, we have over 40 years of
                        experience in airport parking, so when booking your
                        Cardiff Airport parking with us, you know you are being
                        looked after by the experts.
                    </Text>
                    <Text style={styles.Label}>
                        Since 2010, ParkingZone has been named Best Airport
                        Parking Company every year at the British Travel Awards
                        – that’s 11 years in a row – and we are proud of the
                        great service that we offer, for Cardiff Airport parking
                        and airport parking across the UK.
                    </Text>
                    <Text style={styles.Label}>
                        Take a look at our Cardiff Airport parking guide below,
                        which explains the different types of airport parking
                        that you might come across and includes our top
                        money-saving tips.
                    </Text>
                </ScrollView>
            </View>
        </Modal>
    );
};
export default AirportParkingModal;

const styles = StyleSheet.create({
    main_view: {
        justifyContent: 'center',
        backgroundColor: colors.secondaryColor,
        borderTopLeftRadius: wp(5),
        elevation: 10,
        borderTopRightRadius: wp(5),
        paddingVertical: wp(3)
    },
    upLoadText: {
        ...textStyles.smallheading,
        padding: wp(2),
        alignSelf: 'center',
        fontSize: wp(4),
        color: colors.primaryColor,
        textAlign: 'center'
    },
    heading: {
        ...textStyles.heading,
        paddingHorizontal: wp(5),
        paddingTop: wp(5),
        fontSize: RFValue(15),
        lineHeight: RFValue(15) * 1.5,
        textAlign: 'justify'
    },
    Label: {
        ...textStyles.Label,
        padding: wp(5),
        lineHeight: RFValue(12) * 1.5,
        textAlign: 'justify'
    }
});
