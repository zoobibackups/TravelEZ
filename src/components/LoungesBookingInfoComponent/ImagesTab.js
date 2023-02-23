import React from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {wp} from '../../constants/scaling';
import {colors} from '../../constants/theme';
const ImagesTab = ({navigation, route}) => {
  const images_data = route.item
    .split(';')
    .map(item =>
      `https://holidayextras.imgix.net/${item}`
        .replace('/imageLibrary', 'libraryimages')
        .replace('//', '/'),
    );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <FlatList
        data={images_data}
        numColumns={3}
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
        columnWrapperStyle={{
          justifyContent: 'space-evenly',
          paddingBottom: wp(2),
          width: wp(96),
        }}
        renderItem={({item, index}) => {
          console.log(item);
          return (
            <View
              style={{
                width: wp(30),
                height: wp(30),
                borderRadius: wp(1),
                overflow: 'hidden',
                marginTop: wp(2),
                backgroundColor: '#0001',
              }}>
              <Image
                source={{uri: item}}
                style={{
                  width: wp(30),
                  height: wp(30),

                  backgroundColor: '#0001',
                }}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default ImagesTab;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: wp(100),
    width: wp(100),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
