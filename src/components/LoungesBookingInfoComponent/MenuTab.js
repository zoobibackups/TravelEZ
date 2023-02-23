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
import RenderHTMLComponent from '../RenderHTML';
const MenuTab = ({navigation, route}) => {
  const menu_data = route.item;

  const {width} = useWindowDimensions();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
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
                borderRadius: wp(1),
                overflow: 'hidden',
                padding: wp(5),
                marginTop: wp(2),
              }}>
              <Text style={{...textStyles.heading}}>{item.title}</Text>

              <RenderHTMLComponent
                contentWidth={width - wp(10)}
                source={`${item.text}`}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default MenuTab;
