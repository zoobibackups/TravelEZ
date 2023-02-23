import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {wp} from '../../constants/scaling';
import {colors} from '../../constants/theme';
import ExpectData from '../../data/ExpectData';
import {textStyles} from '../../styles/textStyles';
const ExpectationComponent = ({}) => {
  return (
    <View
      style={{
        ...styles.cardView,
        padding: 0,
        elevation: 0,
        borderWidth: 0,
        borderColor: '#f2f2f2',
        overflow: 'hidden',
      }}>
      <View
        style={{
          padding: wp(2),
          backgroundColor: colors.primaryColor,
        }}>
        <Text
          style={{
            ...textStyles.heading,
            color: '#fff',
          }}>
          Your Expectation
        </Text>
      </View>

      <FlatList
        data={ExpectData}
        legacyImplementation={true}
        horizontal={false}
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
              <View style={styles.innercardHeaderView}>
                <View
                  style={{
                    width: wp(20),
                    alignItems: 'center',
                    //                                        backgroundColor: colors.inputBgColor
                  }}>
                  {item.icon}
                </View>
                <View style={{paddingLeft: wp(2)}}>
                  <Text
                    style={{
                      ...textStyles.heading,
                      color: colors.primaryColor,
                    }}>
                    {item.id}.{item.title}
                  </Text>
                  <Text
                    style={{
                      ...textStyles.mediumheading,
                      textAlign: 'justify',
                      width: wp(66),
                    }}>
                    {item.description}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ExpectationComponent;
const styles = StyleSheet.create({
  cardView: {
    backgroundColor: '#0000',
    margin: wp(2),
    borderRadius: wp(2),
    padding: wp(2),
    width: wp(94),
  },
  innerCard: {
    margin: wp(2),
    borderRadius: wp(2),
    paddingTop: 0,
    paddingHorizontal: 0,
    overflow: 'hidden',
    width: wp(93),
    elevation: 5,
    marginLeft: wp(0.5),
    padding: wp(2),
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
