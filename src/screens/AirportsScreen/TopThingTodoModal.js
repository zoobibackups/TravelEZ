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
const TopThingTodoModal = ({ isModalVisible, setIsModalVisible, item }) => {
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
                    <Text style={styles.heading}>Top Things To Do</Text>
                    <Text style={styles.Label}>
                        At Cardiff Airport, passengers can do a lot of things to
                        enjoy their time. They can go to restaurants with their
                        families to enjoy traditional food items as well as
                        continental. The airport offers its facilities for all
                        aged people. Following are the main services of the
                        airport:
                    </Text>
                    <Text style={styles.heading}>Food and drink</Text>
                    <Text style={styles.Label}>
                        Food is an essential option at every airport and Cardiff
                        airport can be the best place to find and discover food
                        items.
                    </Text>
                    <Text style={styles.Label}>{`\u2022`} The Beer House</Text>
                    <Text style={styles.Label}>
                        {`\u2022`} Costa Coffee - Departure Lounge
                    </Text>
                    <Text style={styles.Label}>
                        {`\u2022`} Costa Coffee – Arrivals
                    </Text>
                    <Text style={styles.Label}>{`\u2022`} Caffi Cwtch</Text>
                    <Text style={styles.heading}>Airport security</Text>
                    <Text style={styles.Label}>
                        When you arrive at the security search area, you will be
                        asked to produce your boarding card – this can be an
                        e-boarding on your airline’s app or a paper boarding
                        card.
                    </Text>

                    <Text style={styles.heading}>Shopping </Text>
                    <Text style={styles.Label}>
                        Whether you fancy treating yourself to something special
                        or need to pick up a few gifts for your loved ones, our
                        World Duty-Free store has a fantastic range of products
                        from your favorite brands including Lancôme, Estée
                        Lauder and Burberry, Rayban, Gucci, Swarvoski and more
                        at great prices.
                    </Text>

                    <Text style={styles.heading}>
                        Security passes and forms
                    </Text>
                    <Text style={styles.Label}>
                        Escorted visitor passes are for one-off or infrequent
                        visitors (such as but not limited to, engineering,
                        maintenance, work experience, school parties, absence
                        cover, or training visits). Escorted visitor passes are
                        available 24/7 from the security lodge.
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

export default TopThingTodoModal;
