import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {wp} from '../../../../constants/scaling';
import {colors, fonts} from '../../../../constants/theme';
import getAmenitiesHeaderIcons from '../../../../hooks/getAmenitiesheaderIcon';
import {textStyles} from '../../../../styles/textStyles';
const Item = ({item}) => {
  return (
    <View style={{paddingVertical: wp(0.5)}}>
      <Text style={{...textStyles.mediumheading, color: '#000'}}>
        {' '}
        {`\u2022 ${item}`}
      </Text>
    </View>
  );
};
const FacilitiesTab = ({item}) => {
  let section_data = item.map(item => ({
    title: item.group_name,
    data: item.amenities,
  }));

  return (
    <View style={styles.mainCardView}>
      <SectionList
        sections={section_data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item item={item} />}
        renderSectionHeader={({section: {title}}) => {
          return (
            <View
              style={{
                backgroundColor: colors.primaryColor,
                flexDirection: 'row',
                padding: wp(2),
                paddingHorizontal: wp(5),
                alignItems: 'center',
              }}>
              {getAmenitiesHeaderIcons(title)}
              <Text style={styles.header}>{title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default FacilitiesTab;
const styles = StyleSheet.create({
  mainCardView: {
    evelavtion: 10,
    padding: wp(2),
    borderRadius: wp(2),
    backgroundColor: '#fff',
    margin: wp(2),

    width: wp(97),
  },
  header: {
    fontSize: RFValue(16),
    backgroundColor: colors.primaryColor,
    color: '#fff',
    fontFamily: fonts.Bold,
    includeFontPadding: false,
    paddingLeft: wp(5),
  },
});
