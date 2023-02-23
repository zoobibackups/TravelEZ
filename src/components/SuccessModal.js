import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { RFValue } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { wp } from '../constants/scaling';
import { colors, fonts } from '../constants/theme';
import { textStyles } from '../styles/textStyles';

const SuccessModal = ({
    isVisible,
    message = 'Success',
    title = 'Check your email for booking confirmation. we well see you soon. In case if any query please contact our customer support.',
    onClose,
    buttonText = 'View Details'
}) => {
    return (
        <Modal
            style={styles.ModalView}
            useNativeDriver={true}
            hideModalContentWhileAnimating={true}
            backdropTransitionOutTiming={500}
            animationInTiming={500}
            backdropOpacity={0.4}
            animationOutTiming={500}
            isVisible={isVisible}
            onBackdropPress={onClose}>
            <View style={styles.mainView}>
                <View
                    style={{
                        position: 'absolute',
                        top: RFValue(-31),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        width: RFValue(62),
                        height: RFValue(62),
                        borderRadius: RFValue(40)
                    }}>
                    <AntDesign
                        name="checkcircle"
                        size={RFValue(52)}
                        color={colors.successIconColor}
                    />
                </View>
                <Text
                    style={{
                        ...textStyles.Label,
                        fontSize: RFValue(32),
                        color: colors.secondaryTextColor,
                        paddingVertical: wp(0)
                    }}>
                    {message}
                </Text>

                <Text
                    style={{
                        ...textStyles.Label,
                        textAlign: 'justify',
                        color: colors.primaryColor,
                        paddingVertical: wp(5)
                    }}>
                    {title}
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        width: wp(96)
                    }}>
                    <TouchableOpacity
                        style={{
                            ...styles.Button,
                            backgroundColor: colors.successIconColor
                        }}
                        onPress={onClose}>
                        <Text style={styles.whitetext}>{buttonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default SuccessModal;

const styles = StyleSheet.create({
    ModalView: {
        justifyContent: 'center',
        margin: 0,
        marginHorizontal: wp(2)
    },
    mainView: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        elevation: 10,
        padding: wp(10),
        borderRadius: wp(2)
    },
    Button: {
        marginTop: wp(2),

        borderRadius: wp(1),
        height: wp(12),
        width: wp(80),
        borderWidth: 1,
        borderColor: 'transparent',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colors.dark_primary_color
    },
    whitetext: {
        paddingHorizontal: wp(4),
        color: colors.white,
        fontSize: RFValue(14),
        fontFamily: fonts.Medium
    }
});
