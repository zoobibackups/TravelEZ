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
const AirPortOverViewModal = ({ isModalVisible, setIsModalVisible, item }) => {
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
                    <Text style={styles.heading}>Airport Overview</Text>
                    <Text style={styles.Label}>
                        When booking parking at Cardiff Airport, as well as
                        knowing that your vehicle will be kept in a secure
                        parking facility, you will also want to make sure you
                        are paying the best possible price.
                    </Text>
                    <Text style={styles.Label}>
                        It is always good to save on the costs of your travel
                        necessities and leave a little extra to put towards
                        holiday treats.
                    </Text>
                    <Text style={styles.Label}>
                        Having been in the airport parking business for over
                        forty years, we love to share our money-saving tips, so
                        our customers can be assured of great value when booking
                        with ParkingZone.
                    </Text>
                </ScrollView>
            </View>
        </Modal>
    );
};
export default AirPortOverViewModal;
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
