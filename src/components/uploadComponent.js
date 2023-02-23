import React, { useState } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import { RFValue } from 'react-native-responsive-fontsize';
import Toast from 'react-native-toast-message';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import api from '../api';
import { hp, wp } from '../constants/scaling';
import { colors } from '../constants/theme';
import { textStyles } from '../styles/textStyles';
const UpLoadComponent = ({
    isModalVisible,
    setIsModalVisible,
    setFilePath
}) => {
    const [uploadiing, setUploading] = useState(false);

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
                if (result.status) {
                    Toast.show({
                        type: 'success',
                        text1: 'Image Uploaded Successfully',
                        position: 'bottom',
                        text2: `Image has been uploaded`
                    });
                    setIsModalVisible(false);
                    setFilePath(
                        `${result.file.destination}/${result.file.filename}`
                    );
                } else {
                    Toast.show({
                        type: 'error',
                        text1: 'Image didnot uploaded successfully',
                        position: 'bottom',
                        text2: `${result.error}`
                    });
                }
                setUploading(false);
            })
            .catch(error => {
                Toast.show({
                    type: 'error',
                    text1: 'Image didnot uploaded successfully',
                    position: 'bottom',
                    text2: `${error.message}`
                });
                setUploading(false);
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
            isVisible={isModalVisible}
            onBackdropPress={() => setIsModalVisible(false)}>
            <View style={styles.main_view}>
                <Text style={styles.upLoadText}>Click Here to Upload</Text>

                <TouchableOpacity
                    disabled={uploadiing}
                    style={styles.buttonStyle}
                    onPress={() => {
                        Pickfromcamera();
                    }}>
                    <View style={{ width: wp(10) }}>
                        <FontAwesome
                            size={RFValue(20)}
                            name="camera"
                            color={colors.primaryColor}
                        />
                    </View>
                    <Text style={styles.upLoadText}>Camera</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    disabled={uploadiing}
                    style={styles.buttonStyle}
                    onPress={() => {
                        Pickimage();
                    }}>
                    <View style={{ width: wp(10) }}>
                        <FontAwesome
                            size={RFValue(20)}
                            name="image"
                            color={colors.primaryColor}
                        />
                    </View>
                    <Text style={styles.upLoadText}>Gallery</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    disabled={uploadiing}
                    style={styles.cancel_button}
                    onPress={() => setIsModalVisible(false)}>
                    <Text
                        style={{
                            ...styles.upLoadText,
                            color: colors.deleteIconColor
                        }}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
            {uploadiing && (
                <View style={styles.loadingView}>
                    <ActivityIndicator color={'#fff'} size={'large'} />
                </View>
            )}
        </Modal>
    );
};
export default UpLoadComponent;

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
        borderTopRightRadius: RFValue(20)
    },
    upLoadText: {
        ...textStyles.smallheading,
        padding: RFValue(10),
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
        borderColor: colors.borderColor,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: wp(2),
        width: wp(80),
        borderRadius: wp(2),
        height: wp(12)
    },
    iconbox: {
        width: wp(5),
        alignItems: 'center',
        justifyContent: 'center',
        height: wp(2)
    },
    loadingView: {
        width: wp(100),
        height: hp(30),
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0004'
    }
});
