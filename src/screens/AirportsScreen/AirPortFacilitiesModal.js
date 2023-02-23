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
const AirPortFacilitiesModal = ({
    isModalVisible,
    setIsModalVisible,
    item
}) => {
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
                    <Text style={styles.heading}>Airport facilities</Text>
                    <Text style={styles.Label}>{`\u2022`} Uniformed staff</Text>
                    <Text style={styles.Label}>{`\u2022`} Off-airport</Text>
                    <Text style={styles.Label}>
                        {`\u2022`} On-demand transfers
                    </Text>
                    <Text style={styles.Label}>
                        {`\u2022`} Transfer time 5 minutes
                    </Text>
                    <Text style={styles.Label}>
                        {`\u2022`} 24-hour operation
                    </Text>
                    <Text style={styles.Label}>{`\u2022`} Leave keys</Text>
                    <Text style={styles.Label}>{`\u2022`} Toilets</Text>
                    <Text style={styles.Label}>
                        {`\u2022`} Disabled facilities
                    </Text>
                    <Text style={styles.Label}>
                        {`\u2022`} Assisted loading if requested
                    </Text>
                    <Text style={styles.Label}>{`\u2022`} Valet parking</Text>
                    <Text style={styles.Label}>{`\u2022`} Bus transfer</Text>
                    <Text style={styles.Label}>
                        {`\u2022`} Electric charging point
                    </Text>
                    <Text style={styles.Label}>{`\u2022`} 24-hour staff</Text>
                    <Text style={styles.Label}>
                        {`\u2022`} Security fencing
                    </Text>
                    <Text style={styles.Label}>{`\u2022`} CCTV</Text>
                    <Text style={styles.Label}>
                        {`\u2022`} Park Mark Award (Police Approved)
                    </Text>
                </ScrollView>
            </View>
        </Modal>
    );
};

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
        paddingHorizontal: wp(5),
        paddingVertical: wp(1),
        lineHeight: RFValue(12) * 1.5,
        textAlign: 'justify'
    }
});

export default AirPortFacilitiesModal;
