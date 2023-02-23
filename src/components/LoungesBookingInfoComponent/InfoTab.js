import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';
import {wp} from '../../constants/scaling';
import {colors} from '../../constants/theme';
import RenderHTMLComponent from '../RenderHTML';
const InfoTab = ({navigation, route}) => {
  let item = route.item;
  const {width} = useWindowDimensions();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <View style={{padding: wp(5)}}>
          <RenderHTMLComponent
            contentWidth={width - wp(5)}
            source={`${item}`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoTab;
