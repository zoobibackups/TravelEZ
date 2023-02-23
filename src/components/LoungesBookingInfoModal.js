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
import DirecttionTab from './LoungesBookingInfoComponent/DirecttionTab';
import FacilitiesTab from './LoungesBookingInfoComponent/FacilitiesTab';
import ImagesTab from './LoungesBookingInfoComponent/ImagesTab';
import InfoTab from './LoungesBookingInfoComponent/InfoTab';
import MenuTab from './LoungesBookingInfoComponent/MenuTab';
import TimesTab from './LoungesBookingInfoComponent/TimesTab';
const renderScene = SceneMap({
  InfoTab: InfoTab,
  ImagesTab: ImagesTab,
  MenuTab: MenuTab,
  TimesTab: TimesTab,
  FacilitiesTab: FacilitiesTab,
  DirecttionTab: DirecttionTab,
});
const LoungesBookingInfoModal = ({isModalVisible, setIsModalVisible, item}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = useState([
    {
      key: 'InfoTab',
      title: 'Info',
      item: item?.tripappintroduction,
    },
    {
      key: 'ImagesTab',
      title: 'Images',
      item: item?.tripappimages,
    },
    {
      key: 'MenuTab',
      title: 'Menu',
      item: [
        {
          title: 'Food',
          text: item.menu_food,
        },
        {
          title: 'Drinks',
          text: item.menu_drinks,
        },
        {
          title: 'Extras',
          text: item.menu_extras,
        },
      ],
    },
    {
      title: 'Times',
      key: 'TimesTab',
      item: {
        paragraph: item?.checkintime,
        openingtime: item.openingtime,
        closingtime: item.closingtime,
      },
    },
    {
      key: 'FacilitiesTab',
      title: 'Facilities',
      item: [
        {
          title: 'Facilities',
          text: item.facilities,
        },
        {
          title: 'Entertainment',
          text: item.entertainment_facilities,
        },
        {
          title: 'Business',
          text: item.businessfacilities,
        },
      ],
    },
    {
      key: 'DirecttionTab',
      title: 'Directtion',
      item: item?.directions,
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
        <Text style={styles.upLoadText}>{item.tripappaddonname} </Text>
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
export default LoungesBookingInfoModal;

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
