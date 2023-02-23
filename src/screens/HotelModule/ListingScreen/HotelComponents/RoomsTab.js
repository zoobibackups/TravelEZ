import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {hp, wp} from '../../../../constants/scaling';
import {colors, fonts} from '../../../../constants/theme';
import {textStyles} from '../../../../styles/textStyles';
import RoomBookingItem from '../RoomBookingItem';
import Slider from './Slider';

const RoomTab = ({item}) => {
  const images = item.images;
  const my_item = item;

  const renderItem = ({item, index}) => {
    return (
      <RoomBookingItem
        item={{
          ...item,
          hotel_name: my_item.name,
          region: my_item.region,
          hotel_id: my_item.id,
          hotel_address: my_item.address,
          check_in_time: my_item.check_in_time,
          check_out_time: my_item.check_out_time,
        }}
        index={index}
        images={my_item.images}
      />
    );
  };
  return (
    <View style={styles.mainCardView}>
      <Slider images={images} />
      <FlatList
        data={item.rates}
        legacyImplementation={true}
        horizontal={false}
        windowSize={150}
        removeClippedSubviews={true}
        initialNumToRender={26}
        updateCellsBatchingPeriod={30}
        onEndReachedThreshold={0.7}
        refreshing={true}
        maxToRenderPerBatch={20}
        renderItem={renderItem}
      />
    </View>
  );
};

export default RoomTab;
const styles = StyleSheet.create({
  mainCardView: {
    backgroundColor: '#fff',
    flex: 1,
  },
  IconBg: {
    backgroundColor: colors.primaryColor,
    width: wp(9),
    height: wp(9),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(16),
  },
  ImageView: {
    width: wp(20),
    borderRadius: wp(1),
    height: wp(20),
  },
  PriceView: {
    width: wp(92),

    borderRadius: wp(1),
    marginTop: wp(2),

    justifyContent: 'center',
  },
  PriceText: {
    ...textStyles.heading,
    fontSize: RFValue(18),
  },
  nameText: {
    ...textStyles.heading,
    fontSize: RFValue(14),
    color: colors.primaryColor,
  },
  IconsRow: {
    flexDirection: 'row',
    width: wp(92),
    marginTop: hp(0.5),
    justifyContent: 'space-between',
  },
  IconTextRow: {
    flexDirection: 'row',
    width: wp(92),

    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: wp(0.5),
    borderBottomColor: colors.borderColor,
  },
  InfoiLabeltext: {
    ...textStyles.Label,
    fontSize: RFValue(12),
    fontFamily: fonts.Medium,
    width: wp(85),
    marginLeft: wp(1),
    color: colors.textPrimaryColor,
  },
});
