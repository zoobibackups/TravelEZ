import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {RFValue} from 'react-native-responsive-fontsize';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {hp, wp} from '../constants/scaling';
import {colors, fonts} from '../constants/theme';
import {textStyles} from '../styles/textStyles';
import Arrival from './BookingInfo/Arrival';
import Map from './BookingInfo/Map';
import Note from './BookingInfo/Note';
import OverView from './BookingInfo/OverView';
import Return from './BookingInfo/Return';
import TermAndConditions from './BookingInfo/TermConditions';
const renderScene = SceneMap({
  OverView: OverView,
  Arrival: Arrival,
  Return: Return,
  Map: Map,
  Note: Note,
  TermAndConditions: TermAndConditions,
});
const BookingInfoModal = ({isModalVisible, setIsModalVisible, item}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = useState([
    {
      key: 'OverView',
      title: 'Overview',
      item: item.overview,
    },
    {
      title: 'Arrival',
      key: 'Arrival',
      item: item.arival,
    },
    {
      title: 'Return',
      key: 'Return',
      item: item.return_proc,
    },
    {
      title: 'Map',
      key: 'Map',
    },
    {
      title: 'Note',
      key: 'Note',
      item: item.special_features,
    },
    {
      title: 'Term & Conditions',
      key: 'TermAndConditions',
      item: item.terms,
    },
  ]);
  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        activeColor={colors.secondaryColor}
        inactiveColor={colors.white}
        scrollEnabled={true}
        indicatorStyle={{backgroundColor: colors.secondaryColor}}
        getLabelText={({route}) => route.title}
        renderLabel={({route, focused, color}) => (
          <Text
            numberOfLines={1}
            style={{
              color: color,
              fontSize: RFValue(12),
              fontFamily: fonts.Medium,
            }}>
            {route.title}
          </Text>
        )}
        style={{backgroundColor: colors.primaryColor}}
      />
    );
  };

  return (
    <Modal
      style={{
        justifyContent: 'flex-end',
        margin: 0,
        bottom: 0,
        marginTop: hp(40),
        maxHeight: hp(60),
      }}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}
      animationInTiming={500}
      animationOutTiming={500}
      isVisible={isModalVisible}
      onBackdropPress={() => setIsModalVisible(false)}>
      <View style={styles.main_view}>
        <Text style={styles.upLoadText}>{item.name} </Text>
        <TouchableOpacity
          onPress={() => setIsModalVisible(false)}
          style={{
            width: wp(14),
            height: wp(14),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.primaryColor,
          }}>
          <AntDesign name="close" size={RFValue(24)} color={'red'} />
        </TouchableOpacity>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        scrollEnabled={true}
        swipeEnabled={false}
        lazy={true}
        optimizationsEnabled={true}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width, backgroundColor: '#fff'}}
      />
    </Modal>
  );
};
export default BookingInfoModal;

const styles = StyleSheet.create({
  main_view: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    // borderTopLeftRadius: wp(5),
    elevation: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    width: wp(100),
    borderBottomWidth: 1,
    borderBottomColor: '#fff8',
    //borderTopRightRadius: wp(5),
  },
  upLoadText: {
    ...textStyles.smallheading,
    padding: wp(2),
    paddingLeft: wp(5),
    fontSize: RFValue(14),
    color: colors.white,
  },
});
