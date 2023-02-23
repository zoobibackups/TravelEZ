import React, {memo, useEffect, useRef, useState} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {hp, wp} from '../../../../constants/scaling';
import {colors} from '../../../../constants/theme';
import {textStyles} from '../../../../styles/textStyles';
const Slider = ({images}) => {
  const [active, setActive] = useState(0);
  const flatListRef = useRef(FlatList);

  const [optimized_image, setOptimizedImage] = useState(
    images.map(item => item.replace('{size}', '1024x768')),
  );
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (active < optimized_image.length) {
        flatListRef?.current?.scrollToIndex({
          index: active,
          animated: false,
        });
        setActive(active + 1);
      } else {
        setActive(1);
        flatListRef?.current?.scrollToIndex({
          index: 0,
          animated: false,
        });
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [active]);

  return (
    <View
      style={{
        ...styles.cardView,

        overflow: 'hidden',
      }}>
      <FlatList
        data={optimized_image}
        horizontal={true}
        windowSize={150}
        removeClippedSubviews={true}
        initialNumToRender={26}
        updateCellsBatchingPeriod={30}
        onEndReachedThreshold={0.7}
        refreshing={true}
        maxToRenderPerBatch={20}
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item.id}
        renderItem={({item, index}) => {
          return (
            <View style={styles.innerCard}>
              <Image
                style={{width: wp(96), borderRadius: wp(2), height: hp(30)}}
                resizeMode={'stretch'}
                source={{
                  uri: `${item}`.replace('{size}', '1024x768'),
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};
function moviePropsAreEqual(prevMovie, nextMovie) {
  return prevMovie.length === nextMovie.length;
}
export default memo(Slider, moviePropsAreEqual);
const styles = StyleSheet.create({
  cardView: {
    backgroundColor: colors.white,
    alignSelf: 'center',
    width: wp(98),
  },
  innerCard: {
    width: wp(98),
    margin: wp(1),
    alignSelf: 'center',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  ButtonBox: {
    position: 'absolute',
    flexDirection: 'row',
    right: 0,
    justifyContent: 'space-between',
    width: wp(20),
    padding: wp(2),
  },
  innercardHeaderView: {
    backgroundColor: '#0000',
    flexDirection: 'row',
    padding: wp(2),
    paddingBottom: 0,
    alignItems: 'center',
  },
  headingTextNumber: {
    ...textStyles.heading,
    color: colors.primaryColor,
    textAlign: 'center',
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
  description: {
    ...textStyles.mediumheading,
    paddingHorizontal: wp(2),
    textAlign: 'justify',
  },
});
