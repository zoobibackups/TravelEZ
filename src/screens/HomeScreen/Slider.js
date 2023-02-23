import React, {useEffect, useRef, useState} from 'react';
import {FlatList, ImageBackground} from 'react-native';
import images from '../../assets/images/images';

import {hp, wp} from '../../constants/scaling';
const Slider = ({}) => {
  const [active, setActive] = useState(0);

  const flatListRef = useRef(FlatList);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (active < images.length) {
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
    }, 2000);
    return () => clearInterval(intervalId);
  }, [active]);

  return (
    <FlatList
      data={images}
      horizontal={true}
      legacyImplementation={true}
      removeClippedSubviews={true}
      initialNumToRender={26}
      updateCellsBatchingPeriod={30}
      onEndReachedThreshold={0.7}
      refreshing={true}
      maxToRenderPerBatch={20}
      ref={flatListRef}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{flex: 1}}
      keyExtractor={(item, index) => item.id}
      renderItem={({item, index}) => {
        return (
          <ImageBackground
            source={item.img}
            resizeMode={'stretch'}
            style={{
              width: wp(94),
              height: hp(45),
            }}
          />
        );
      }}
    />
  );
};

export default Slider;
