import moment from 'moment';
import React, { useRef, useState } from 'react';
import {
    Animated,
    Easing,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import api from '../../api';
import CustomHeader from '../../components/CustomHeader';
import MessageReplyComponent from '../../components/MessageReplyComponent';
import { hp, wp } from '../../constants/scaling';
import { colors, fonts } from '../../constants/theme';
import { textStyles } from '../../styles/textStyles';
const renderItem = ({ item, index }) => {
    if (item.reply_by != 'Client') {
        return (
            <View style={styles.LeftChat}>
                <View style={styles.LeftChatHeaderRow}>
                    <FontAwesome
                        name={'user'}
                        size={wp(10)}
                        color={colors.primaryColor}
                    />
                    <View style={{ marginLeft: wp(4) }}>
                        <Text
                            style={{
                                ...textStyles.mediumheading,
                                fontFamily: fonts.Bold,
                                fontSize: RFValue(13),
                                color: colors.primaryColor
                            }}>
                            Jordan Wright
                        </Text>
                        <Text
                            style={{
                                ...textStyles.mediumheading,

                                fontSize: RFValue(11),
                                color: colors.primaryColor
                            }}>
                            {item.reply_by}
                        </Text>
                    </View>
                </View>
                <View style={{ padding: wp(2) }}>
                    <Text
                        style={{
                            ...textStyles.mediumheading,
                            fontSize: RFValue(11),
                            color: colors.textPrimaryColor
                        }}>
                        {item.message}
                    </Text>
                </View>
            </View>
        );
    } else {
        return (
            <View style={styles.RightChat}>
                <View
                    style={{
                        ...styles.LeftChatHeaderRow,
                        backgroundColor: colors.primaryColor
                    }}>
                    <FontAwesome
                        name={'user'}
                        size={wp(10)}
                        color={colors.secondaryColor}
                    />
                    <View style={{ marginLeft: wp(4) }}>
                        <Text
                            style={{
                                ...textStyles.mediumheading,
                                fontFamily: fonts.Bold,
                                fontSize: RFValue(13),
                                color: colors.secondaryColor
                            }}>
                            Test Developer
                        </Text>
                        <Text
                            style={{
                                ...textStyles.mediumheading,

                                fontSize: RFValue(11),
                                color: colors.secondaryColor
                            }}>
                            {item.reply_by}
                        </Text>
                    </View>
                </View>
                <View style={{ padding: wp(2) }}>
                    <Text
                        style={{
                            ...textStyles.mediumheading,
                            fontSize: RFValue(11),
                            color: colors.textPrimaryColor
                        }}>
                        {item.message}
                    </Text>
                </View>
            </View>
        );
    }
};
const TicketDetailsScreen = ({ navigation, route }) => {
    const [ticket_data, setTicketData] = useState(
        JSON.parse(route.params.item)
    );

    const [open, setOpen] = useState(false);
    const [messageModal, setMessageModal] = useState(false);
    const animatedController = useRef(new Animated.Value(0)).current;
    const [bodySectionHeight, setBodySectionHeight] = useState(hp(50));
    const flatListRef = useRef(FlatList);
    const bodyHeight = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: [0, bodySectionHeight]
    });

    const arrowAngle = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0rad', `${Math.PI}rad`]
    });

    const toggleListItem = () => {
        if (open) {
            Animated.timing(animatedController, {
                duration: 300,
                toValue: 0,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(animatedController, {
                duration: 300,
                toValue: 1,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false
            }).start();
        }
        setOpen(!open);
    };

    const CallBackfunctionfromReply = () => {
        getTicketDetails(ticket_data.email, ticket_data.ticket_ref);
        setMessageModal(false);
    };
    const getTicketDetails = (email, ref) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(
            `${api}/tickets?ticket_refrence=${ref}&email=${email}`,
            requestOptions
        )
            .then(response => response.json())
            .then(result => {
                if (result.status == true) {
                    setTicketData(result.data);
                } else {
                    Toast.show({
                        type: 'error',
                        text1: 'Form Error',
                        position: 'bottom',
                        text2: `${result.data}`
                    });
                }
            })
            .catch(error => {
                Toast.show({
                    type: 'error',
                    text1: 'Form Error',
                    position: 'bottom',
                    text2: `Sorry, Please check your email and ticket reference carefully`
                });
            });
    };
    React.useLayoutEffect(() => {
        const timeout = setTimeout(() => {
            if (flatListRef.current) {
                flatListRef.current.scrollToEnd({ animated: true });
            }
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [ticket_data]);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <CustomHeader
                title={'Change of flight'}
                show_backButton={true}
                isdrawer={false}
                onPress={() => navigation.goBack()}
            />

            <View style={styles.mainContainer}>
                <View style={styles.item}>
                    <Text
                        style={{
                            ...textStyles.smallheading,

                            fontSize: RFValue(12),
                            color: colors.primaryColor
                        }}>
                        Tap here to view your ticket information
                    </Text>
                    <TouchableOpacity
                        onPress={() => toggleListItem()}
                        style={styles.IconButton}>
                        <View
                            style={{
                                height: wp(6),
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: wp(6),
                                marginRight: wp(2),
                                backgroundColor: '#0000'
                            }}>
                            <Entypo
                                color={'#fff'}
                                name={'info-with-circle'}
                                size={wp(5)}
                            />
                        </View>
                        <Text
                            style={{
                                ...textStyles.smallheading,

                                fontSize: RFValue(12),
                                color: colors.white
                            }}>
                            Ticket Information
                        </Text>
                        <Animated.View
                            style={{
                                width: hp(7),
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: hp(7),
                                position: 'absolute',
                                right: 0,
                                alignSelf: 'flex-end',
                                backgroundColor: '#0000',
                                transform: [{ rotateZ: arrowAngle }]
                            }}>
                            <Entypo
                                color={'#ffff'}
                                name={'chevron-down'}
                                size={wp(6)}
                            />
                        </Animated.View>
                    </TouchableOpacity>

                    <Animated.View
                        style={{
                            backgroundColor: '#EFEFEF',

                            width: wp(92),
                            paddingHorizontal: wp(1),
                            height: bodyHeight,
                            overflow: 'hidden'
                        }}>
                        <View
                            style={styles.bodyContainer}
                            onLayout={event => {
                                setBodySectionHeight(
                                    event.nativeEvent.layout.height
                                );
                            }}>
                            <View style={styles.ticket_info_row_view}>
                                <Text style={styles.detailsText}>Ref</Text>
                                <Text style={styles.detailsText}>
                                    {ticket_data.ticket_id}
                                </Text>
                            </View>
                            <View style={styles.ticket_info_row_view}>
                                <Text style={styles.detailsText}>
                                    Ticket Status
                                </Text>
                                <Text style={styles.detailsText}>
                                    {ticket_data.status}
                                </Text>
                            </View>
                            <View style={styles.ticket_info_row_view}>
                                <Text style={styles.detailsText}>
                                    Department
                                </Text>
                                <Text style={styles.detailsText}>
                                    {ticket_data.department == 1
                                        ? 'Booking'
                                        : ticket_data.department == 2
                                        ? 'Complaint'
                                        : ticket_data.department == 3
                                        ? 'Amendment'
                                        : 'Cancellation'}
                                </Text>
                            </View>
                            <View style={styles.ticket_info_row_view}>
                                <Text style={styles.detailsText}>Created</Text>
                                <Text style={styles.detailsText}>
                                    {moment(ticket_data.date).format(
                                        'YYYY-MM-DD HH:mm'
                                    )}
                                </Text>
                            </View>
                            <View style={styles.ticket_info_row_view}>
                                <Text style={styles.detailsText}>Priority</Text>
                                <Text style={styles.detailsText}>
                                    {ticket_data.urgency}
                                </Text>
                            </View>
                            <View style={styles.ticket_info_row_view}>
                                <Text style={styles.detailsText}>Progress</Text>
                                <Text style={styles.detailsText}>
                                    Awaiting for Company Read
                                </Text>
                            </View>
                        </View>
                    </Animated.View>
                </View>
                <FlatList
                    data={ticket_data.chat}
                    ref={flatListRef}
                    legacyImplementation={true}
                    horizontal={false}
                    windowSize={150}
                    removeClippedSubviews={true}
                    initialNumToRender={26}
                    updateCellsBatchingPeriod={30}
                    onEndReachedThreshold={0.7}
                    refreshing={true}
                    maxToRenderPerBatch={20}
                    contentContainerStyle={{ width: wp(100) }}
                    renderItem={renderItem}
                />

                <View style={styles.chooseFileView}>
                    <TouchableOpacity
                        onPress={() => setMessageModal(true)}
                        style={styles.ReplyButton}>
                        <Entypo color={'#fff'} name={'reply'} size={wp(6)} />
                    </TouchableOpacity>
                </View>
            </View>

            <MessageReplyComponent
                isModalVisible={messageModal}
                name={ticket_data.name}
                ticket_id={ticket_data.ticket_id}
                email={ticket_data.email}
                title={ticket_data.title}
                CallBackfunctionfromReply={CallBackfunctionfromReply}
                setIsModalVisible={() => setMessageModal(false)}
            />
        </SafeAreaView>
    );
};
export default TicketDetailsScreen;
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        margin: wp(2),
        borderRadius: wp(2),
        width: wp(96),
        alignSelf: 'center',
        elevation: 10,

        padding: wp(2)
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyContainer: {
        minHeight: 10,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0
    },
    linearGradient: {
        paddingBottom: hp(0),
        paddingLeft: 0,
        flex: 1,
        paddingRight: 0,
        borderRadius: 5
    },
    chooseFileView: {
        alignSelf: 'center',
        width: wp(96),
        height: hp(10),
        justifyContent: 'center'
    },
    detailsText: {
        ...textStyles.Label,
        marginTop: wp(2),
        fontFamily: fonts.Bold,
        color: colors.primaryColor,
        textAlign: 'justify'
    },
    IconButton: {
        width: wp(92),
        marginTop: wp(2),
        paddingLeft: wp(5),
        borderTopLeftRadius: wp(2),
        borderTopRightRadius: wp(2),
        elevation: 5,
        height: hp(7),
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.borderColor,
        backgroundColor: colors.primaryColor
    },
    ReplyButton: {
        width: hp(7),
        marginTop: wp(2),
        alignSelf: 'flex-end',
        borderRadius: hp(7),
        elevation: 5,
        height: hp(7),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.borderColor,
        backgroundColor: colors.primaryColor
    },
    LeftChat: {
        width: wp(80),
        minHeight: hp(5),
        borderRadius: wp(2),
        alignSelf: 'flex-start',
        elevation: 5,
        margin: wp(2),
        backgroundColor: colors.white
    },
    LeftChatHeaderRow: {
        flexDirection: 'row',
        backgroundColor: colors.secondaryColor,
        padding: wp(2),
        borderTopLeftRadius: wp(2),
        borderTopRightRadius: wp(2)
    },
    RightChat: {
        width: wp(80),
        minHeight: hp(5),
        //overflow: 'hidden',
        borderRadius: wp(2),
        elevation: 5,
        margin: wp(2),
        alignSelf: 'flex-end',
        backgroundColor: colors.white
    },
    ticket_info_row_view: {
        flexDirection: 'row',
        width: wp(92),
        padding: wp(2),
        borderBottomWidth: 0.5,
        borderBottomColor: colors.secondaryColor,
        justifyContent: 'space-between'
    }
});
