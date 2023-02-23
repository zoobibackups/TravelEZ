import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {RFValue} from 'react-native-responsive-fontsize';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {hp, wp} from '../constants/scaling';
import {colors, fonts} from '../constants/theme';
import {textStyles} from '../styles/textStyles';
const CONTAINER_WIDTH = wp(96);
const CountryModal = ({
  placeholder,
  items,
  setItems,
  selectedItems,
  setSelectItems,
  isVisible,
  setIsVisible,
}) => {
  return (
    <View style={styles.mainView}>
      <Text
        style={{
          ...textStyles.Label,
          color: colors.white,
          alignSelf: 'flex-start',
          marginBottom: wp(1),
        }}>
        Your Citizenship
      </Text>
      <FontAwesome
        name={'map-marker'}
        style={{
          left: wp(5),
          top: hp(6),
          position: 'absolute',
          zIndex: 100,
        }}
        color={'#a1aac4'}
        size={RFValue(20)}
      />
      <DropDownPicker
        open={isVisible}
        value={selectedItems}
        searchable={true}
        searchPlaceholder="Search Here ..."
        placeholder={`${placeholder}`}
        modalTitle={'Please Select'}
        listMode="MODAL"
        showArrowIcon={true}
        items={items}
        setOpen={setIsVisible}
        setValue={setSelectItems}
        setItems={setItems}
        style={{
          ...styles.MianViewstyle,
          minWidth: CONTAINER_WIDTH,
          maxWidth: CONTAINER_WIDTH,
        }}
        containerProps={{
          ...styles.containerProps,
          minWidth: CONTAINER_WIDTH,
          maxWidth: CONTAINER_WIDTH,
        }}
        containerStyle={{
          ...styles.containerStyle,
          minWidth: CONTAINER_WIDTH,
          maxWidth: CONTAINER_WIDTH,
        }}
        ArrowUpIconComponent={({style}) => (
          <View style={styles.iconsStyle}>
            <Entypo color={colors.white} name={'chevron-up'} size={wp(6)} />
          </View>
        )}
        ArrowDownIconComponent={({style}) => (
          <View style={styles.iconsStyle}>
            <Entypo color={colors.white} name={'chevron-down'} size={wp(8)} />
          </View>
        )}
        labelStyle={{...styles.AllLabelText, color: '#fff'}}
        searchContainerStyle={styles.searchContainerStyle}
        searchTextInputProps={styles.searchTextInputProps}
        searchTextInputStyle={styles.AllLabelText}
        _modalContentContainerStyle={{
          borderRadius: wp(2),
          overflow: 'hidden',
          backgroundColor: '#fff',
        }}
        customItemContainerStyle={{
          backgroundColor: '#0000',
          minHeight: wp(15),
        }}
        CloseIconComponent={({style}) => (
          <Ionicons
            color={colors.white}
            name={'close'}
            size={wp(10)}
            style={{
              alignSelf: 'center',
            }}
          />
        )}
        closeIconStyle={{
          width: wp(15),
          height: wp(15),
        }}
        modalProps={{
          animationType: 'fade',
          margin: 0,
          overflow: 'hidden',
          style: {
            backgroundColor: '#fff',
            overflow: 'hidden',
            margin: 0,
          },
        }}
        placeholderStyle={{
          fontFamily: fonts.Medium,
          includeFontPadding: false,
        }}
        listItemContainerStyle={{
          minHeight: wp(15),
          maxHeight: wp(15),
          height: wp(15),
          backgroundColor: '#0001',
          borderBottomWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomColor: 'rgba(0,0,0,.1)',
        }}
        listItemLabelStyle={styles.AllLabelText}
        selectedItemContainerStyle={{
          backgroundColor: 'rgba(0,0,0,.1)',
        }}
        selectedItemLabelStyle={styles.AllLabelText}
      />
    </View>
  );
};

export default CountryModal;

const styles = StyleSheet.create({
  mainView: {
    alignSelf: 'center',
    width: wp(96),
    height: hp(12),
    justifyContent: 'center',
  },
  iconsStyle: {
    width: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(7),
    marginRight: -wp(3),
    borderTopRightRadius: wp(2),
    borderBottomRightRadius: wp(2),
    backgroundColor: colors.lightPrimaryColor,
  },
  MianViewstyle: {
    maxHeight: wp(15),
    minHeight: wp(15),
    paddingLeft: wp(10),
    borderColor: colors.white,
    backgroundColor: colors.transparentbgColor,
    borderRadius: wp(2),
    borderWidth: 1,
  },
  containerProps: {
    backgroundColor: '#0000',
    maxHeight: wp(15),
    alignSelf: 'center',
    minHeight: wp(15),
    backgroundColor: '#fff0',
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  containerStyle: {
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    height: wp(15),

    minHeight: wp(15),
    maxHeight: wp(15),
  },
  AllLabelText: {
    color: colors.textPrimaryColor,
    fontFamily: fonts.Medium,
    textAlignVertical: 'center',

    includeFontPadding: false,
    fontSize: RFValue(14),
  },
  searchTextInputProps: {
    borderWidth: 0,
    backgroundColor: 'rgba(255,255,255,.1)',
    height: wp(12),
  },
  searchContainerStyle: {
    borderBottomColor: 'rgba(0,0,0,.1)',
    borderBottomWidth: 0,
    backgroundColor: colors.primaryColor,
    width: wp(100),
    height: wp(15),
  },
});
