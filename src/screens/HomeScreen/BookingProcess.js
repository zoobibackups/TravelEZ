import React, {useRef} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {wp} from '../../constants/scaling';
import {colors} from '../../constants/theme';
import bookingprocess from '../../data/BookingProcess';
import {textStyles} from '../../styles/textStyles';

const BookingProcess = ({}) => {
  const flatListRef = useRef(FlatList);
  const nextPress = index => {
    if (index <= 2) {
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index: index + 1,
      });
    }
  };
  const backPress = index => {
    if (index >= 1) {
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index: index - 1,
      });
    }
  };
  return (
    <View
      style={{
        ...styles.cardView,
        padding: 0,

        overflow: 'hidden',
      }}>
      <View
        style={{
          padding: wp(2),
          backgroundColor: colors.white,
        }}>
        <Text
          style={{
            ...textStyles.heading,
            color: colors.textPrimaryColor,
          }}>
          Booking Process
        </Text>
      </View>
      <Text
        style={{
          ...textStyles.mediumheading,
          padding: wp(2),
          paddingBottom: 0,
        }}>
        You can reserve your parking slot in advance. Please follow these four
        simple steps to book your parking slot.
      </Text>
      <FlatList
        data={bookingprocess}
        horizontal={true}
        ref={flatListRef}
        legacyImplementation={true}
        windowSize={150}
        removeClippedSubviews={true}
        initialNumToRender={26}
        updateCellsBatchingPeriod={30}
        onEndReachedThreshold={0.7}
        refreshing={true}
        maxToRenderPerBatch={20}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item.id}
        renderItem={({item, index}) => {
          return (
            <View style={styles.innerCard}>
              {item.image}
              <View style={styles.ButtonBox}>
                <TouchableOpacity
                  onPress={() => backPress(index)}
                  style={{
                    backgroundColor: '#0000',
                    borderRadius: wp(50),
                  }}>
                  <AntDesign
                    name="leftcircle"
                    size={RFValue(25)}
                    style={{elevation: 10, margin: wp(1)}}
                    color={
                      index == 0
                        ? '#dad9db' //'rgba(49, 18, 75,.7)'
                        : colors.primaryColor
                    }
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => nextPress(index)}
                  style={{
                    backgroundColor: '#0000',
                    borderRadius: wp(50),
                  }}>
                  <AntDesign
                    name="rightcircle"
                    size={RFValue(25)}
                    style={{elevation: 10, margin: wp(1)}}
                    color={
                      index == 3
                        ? '#dad9db' //'rgba(49, 18, 75,.7)'
                        : colors.primaryColor
                    }
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.innercardHeaderView}>
                <Text style={styles.headingTextNumber}>
                  {item.id}. {item.title}
                </Text>
              </View>

              <Text style={styles.description}>{item.description}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default BookingProcess;
const styles = StyleSheet.create({
  cardView: {
    backgroundColor: colors.white,
    margin: wp(2),
    elevation: 4,
    borderRadius: wp(2),
    padding: wp(2),
    width: wp(94),
  },
  innerCard: {
    margin: wp(2),
    borderRadius: wp(2),
    padding: wp(0),
    paddingTop: 0,
    paddingHorizontal: 0,
    overflow: 'hidden',
    width: wp(93),

    marginLeft: wp(0.5),
    padding: wp(2),
    backgroundColor: '#00000009',
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
