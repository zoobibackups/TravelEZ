import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {wp} from '../../constants/scaling';
import {colors} from '../../constants/theme';
import {textStyles} from '../../styles/textStyles';
const FacilitiesTab = ({navigation, route}) => {
  const menu_data = route.item;
  const {width} = useWindowDimensions();
  return (
    <SafeAreaView
      style={{flex: 1, paddingTop: wp(5), backgroundColor: colors.white}}>
      <FlatList
        data={menu_data}
        legacyImplementation={true}
        horizontal={false}
        windowSize={150}
        removeClippedSubviews={true}
        initialNumToRender={26}
        updateCellsBatchingPeriod={30}
        onEndReachedThreshold={0.7}
        refreshing={true}
        maxToRenderPerBatch={20}
        style={{alignSelf: 'center'}}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                overflow: 'hidden',
                margin: wp(5),
                marginTop: 0,
                paddingBottom: wp(5),
                borderBottomColor: colors.secondaryColor,
                borderBottomWidth: index == 2 ? 0 : 2,
              }}>
              <Text style={{...textStyles.heading}}>{item.title}</Text>
              <Text style={{...textStyles.Label, textAlign: 'justify'}}>
                {item.text}
              </Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default FacilitiesTab;
