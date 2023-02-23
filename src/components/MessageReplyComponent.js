import React, { useState } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import { RFValue } from 'react-native-responsive-fontsize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import api from '../api';
import { hp, wp } from '../constants/scaling';
import { colors, fonts } from '../constants/theme';
import { textStyles } from '../styles/textStyles';
import CustomButton from './CustomButton';
import CustomTextInput from './CustomInput';
const MessageReplyComponent = ({
    name,
    email,
    title,
    ticket_id,
    CallBackfunctionfromReply,
    isModalVisible,
    setIsModalVisible
}) => {
    const [uploadiing, setUploading] = useState(false);
    const [message, setMessage] = useState('');
    const [filepath, setFilePath] = useState('');
    const [sending, setSending] = useState(false);
    const Pickimage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        })
            .then(image => {
                UploadFileAPI(image);
            })
            .catch(err => {});
    };

    const Pickfromcamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        })
            .then(image => {
                UploadFileAPI(image);
            })
            .catch(err => {});
    };

    const UploadFileAPI = image => {
        setUploading(true);

        var formdata = new FormData();
        var photo = {
            uri: image.path,
            type: `${image.mime}`,
            name: image.path.split('/').pop()
        };
        formdata.append('image', photo);
        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formdata
        };
        fetch(`${api}/fileUpload`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result, 'FILE UPLOADDD');
                if (result.status) {
                    ToastAndroid.showWithGravityAndOffset(
                        'File uploaded successfully',
                        ToastAndroid.LONG,
                        ToastAndroid.BOTTOM,
                        25,
                        50
                    );

                    setFilePath(
                        `${result.file.destination}/${result.file.filename}`
                    );
                } else {
                    ToastAndroid.showWithGravityAndOffset(
                        'Image didnot uploaded successfully',
                        ToastAndroid.LONG,
                        ToastAndroid.BOTTOM,
                        25,
                        50
                    );
                }
                setUploading(false);
            })
            .catch(error => {
                ToastAndroid.showWithGravityAndOffset(
                    'Image didnot uploaded successfully',
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    25,
                    50
                );
                setUploading(false);
            });
    };

    const sendReply = () => {
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        setSending(true);
        var raw = JSON.stringify({
            ticket_id: ticket_id,
            message: message,
            attachment: filepath
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${api}/tickets/tikcetreply`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setSending(false);

                if (result.status) {
                    CallBackfunctionfromReply();
                    ToastAndroid.showWithGravityAndOffset(
                        'Message Sended successfully',
                        ToastAndroid.LONG,
                        ToastAndroid.BOTTOM,
                        25,
                        50
                    );
                } else {
                    ToastAndroid.showWithGravityAndOffset(
                        'Message Sending failed',
                        ToastAndroid.LONG,
                        ToastAndroid.BOTTOM,
                        25,
                        50
                    );
                }
            })
            .catch(error => {
                console.log(error);
                ToastAndroid.showWithGravityAndOffset(
                    'Message Sending failed 2',
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    25,
                    50
                );
                setSending(false);
            });
    };
    return (
        <Modal
            style={{
                justifyContent: 'flex-end',
                margin: 0
            }}
            useNativeDriver={true}
            hideModalContentWhileAnimating={true}
            backdropTransitionOutTiming={0}
            animationInTiming={500}
            animationOutTiming={500}
            onBackdropPress={() => setIsModalVisible(false)}
            isVisible={isModalVisible}>
            <View style={styles.main_view}>
                <Text
                    style={{
                        ...styles.upLoadText,
                        fontSize: RFValue(14),
                        paddingLeft: wp(5),
                        alignSelf: 'flex-start',
                        textAlign: 'left'
                    }}>
                    Title: {title}
                </Text>
                <CustomTextInput
                    label={'Name *'}
                    editable={false}
                    placeholder={'ticket message'}
                    onChangeText={text => setMessage(text)}
                    value={name}
                />
                <CustomTextInput
                    label={'Email *'}
                    editable={false}
                    placeholder={'ticket message'}
                    onChangeText={text => setMessage(text)}
                    value={email}
                />
                <CustomTextInput
                    label={'Message *'}
                    multiline={true}
                    placeholder={'ticket message'}
                    onChangeText={text => setMessage(text)}
                    value={message}
                />
                <View style={{ marginBottom: wp(5) }}>
                    <Text
                        style={{
                            ...styles.upLoadText,
                            alignSelf: 'flex-start',
                            fontFamily: fonts.Medium,
                            marginBottom: 0,
                            marginLeft: wp(2),
                            includeFontPadding: false,
                            textAlign: 'left'
                        }}>
                        Click here to upload attachment
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            width: wp(92),
                            borderRadius: wp(2),
                            borderWidth: 1,
                            backgroundColor: '#fff',
                            marginTop: wp(1),
                            height: wp(30),
                            alignItems: 'center',
                            elevation: 10,
                            borderColor: colors.borderColor,
                            justifyContent: 'space-evenly',
                            alignSelf: 'center'
                        }}>
                        <TouchableOpacity
                            disabled={uploadiing}
                            style={styles.buttonStyle}
                            onPress={() => {
                                Pickfromcamera();
                            }}>
                            <View
                                style={{
                                    backgroundColor: colors.primaryColor,
                                    width: wp(10),
                                    borderRadius: wp(10),
                                    height: wp(10),
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <FontAwesome
                                    size={wp(5)}
                                    name="camera"
                                    color={colors.white}
                                />
                            </View>
                            <Text
                                style={{
                                    ...styles.upLoadText,
                                    marginTop: wp(1),
                                    textAlign: 'center'
                                }}>
                                Open Camera
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            disabled={uploadiing}
                            style={styles.buttonStyle}
                            onPress={() => {
                                Pickimage();
                            }}>
                            <View
                                style={{
                                    backgroundColor: colors.primaryColor,
                                    width: wp(10),
                                    borderRadius: wp(10),
                                    height: wp(10),
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <FontAwesome
                                    size={wp(5)}
                                    name="image"
                                    color={colors.white}
                                />
                            </View>
                            <Text
                                style={{
                                    ...styles.upLoadText,
                                    marginTop: wp(1),
                                    textAlign: 'center'
                                }}>
                                Open Gallery
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <CustomButton
                    title={'Submit'}
                    loading={sending || uploadiing}
                    disabled={sending || uploadiing}
                    loadingText={
                        uploadiing
                            ? 'Uploading your file'
                            : sending
                            ? 'Sending your message'
                            : null
                    }
                    onPress={() => {
                        sendReply();
                    }}
                    backgroundColor={colors.secondaryColor}
                />
            </View>
            {uploadiing && (
                <View style={styles.loadingView}>
                    <ActivityIndicator color={'#fff'} size={'large'} />
                </View>
            )}
        </Modal>
    );
};
export default MessageReplyComponent;

const styles = StyleSheet.create({
    text: {
        ...textStyles.smallheading,
        fontSize: RFValue(12),
        color: colors.dark_primary_color,
        backgroundColor: '#0000',
        alignSelf: 'flex-start',
        textAlign: 'left'
    },
    textplaceholder: {
        ...textStyles.smallheading,
        fontSize: RFValue(12),
        color: colors.text_primary_color,
        backgroundColor: '#0000',

        includeFontPadding: false,
        textAlign: 'left'
    },
    Row: {
        borderWidth: 1,
        borderRadius: RFValue(5),
        borderColor: colors.divide_color,
        paddingHorizontal: RFValue(10),
        height: RFValue(40),
        alignItems: 'center',

        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    main_view: {
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderTopLeftRadius: RFValue(20),
        paddingTop: RFValue(20),
        borderTopRightRadius: RFValue(20)
    },
    upLoadText: {
        ...textStyles.smallheading,
        paddingHorizontal: wp(2),
        alignSelf: 'center',
        color: colors.textPrimaryColor,
        textAlign: 'center'
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
        justifyContent: 'center'
    },
    buttonStyle: {
        backgroundColor: '#0001',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp(40),
        borderRadius: wp(2),
        height: wp(20)
    },
    iconbox: {
        width: wp(5),
        alignItems: 'center',
        justifyContent: 'center',
        height: wp(2)
    },
    loadingView: {
        width: wp(100),
        height: hp(75),
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0004'
    }
});
