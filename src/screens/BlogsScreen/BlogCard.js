import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import MainRoutes from '../../constants/MainRoutes';
import {wp} from '../../constants/scaling';
import {colors, fonts} from '../../constants/theme';
import {textStyles} from '../../styles/textStyles';
const BlogCard = ({item, index}) => {
  let decscription = item.content.replace(/<\/?[^>]+(>|$)/g, '');
  const navigation = useNavigation();
  return (
    <View style={styles.mainCardView}>
      <Image
        style={styles.ImageView}
        source={{
          uri: `https://www.parkingzone.co.uk/storage/app/${item.banner}`,
        }}
      />
      <View style={styles.BlogView}>
        <Text numberOfLines={1} style={styles.blogheadingText}>
          {item.page_title}
        </Text>
        <Text numberOfLines={3} style={styles.blogparagraphtext}>
          {decscription}
        </Text>
        <View style={{alignSelf: 'flex-end'}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(MainRoutes.BlogDetailsScreen, {
                item: item,
              })
            }
            style={{
              backgroundColor: colors.primaryColor,
              paddingHorizontal: wp(5),
              paddingVertical: wp(1),
              justifyContent: 'center',
              marginTop: wp(2),
              borderRadius: wp(1),
            }}>
            <Text style={{...textStyles.Label, color: '#fff'}}>Read more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BlogCard;
const styles = StyleSheet.create({
  mainCardView: {
    elevation: 5,
    borderRadius: wp(2),
    backgroundColor: '#fff',
    margin: wp(2),
    padding: wp(1),
    flexDirection: 'row',
    width: wp(96),
  },
  ImageView: {
    width: wp(30),
    borderRadius: wp(2),
    borderColor: colors.secondaryColor,

    height: wp(30),
  },
  BlogView: {
    width: wp(62),
    overflow: 'hidden',
    borderRadius: wp(1),
    paddingLeft: wp(2),
    backgroundColor: colors.white,
  },
  blogheadingText: {
    ...textStyles.heading,
    fontSize: RFValue(14),
    includeFontPadding: false,
    color: colors.textPrimaryColor,
  },
  blogparagraphtext: {
    ...textStyles.Label,
    fontSize: RFValue(13),
    fontFamily: fonts.Medium,
    color: colors.primaryColor,
  },
});
