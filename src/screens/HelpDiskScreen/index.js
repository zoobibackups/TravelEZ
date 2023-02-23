import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Entypo from 'react-native-vector-icons/FontAwesome';
import CustomHeader from '../../components/CustomHeader';
import {hp, wp} from '../../constants/scaling';
import {colors, fonts} from '../../constants/theme';
import {textStyles} from '../../styles/textStyles';
import CreateNewTicket from './CreateNewTicket';
import FindExistingTicket from './FindExistingTicket';
const IconsView = () => {
  return (
    <Entypo name="hand-o-right" size={wp(4)} color={colors.primaryColor} />
  );
};
const HelpDiskScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <CustomHeader
        title={'Help Disk'}
        show_backButton={true}
        isdrawer={true}
        onPress={() => navigation.openDrawer()}
      />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: hp(10),
          backgroundColor: '#fff',
        }}
        showsVerticalScrollIndicator={false}>
        <FindExistingTicket navigation={navigation} />
        <CreateNewTicket navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: RFValue(16),
    color: colors.primaryColor,
    textAlign: 'left',
    paddingLeft: wp(3),

    marginVertical: wp(3),
    fontFamily: fonts.Bold,
  },
  CardView: {
    width: wp(96),
    alignSelf: 'center',
    borderRadius: wp(2),
    padding: wp(2),
    margin: wp(1),
    elevation: 5,
    backgroundColor: '#fff',
  },
  detailsText: {
    ...textStyles.Label,
    paddingLeft: wp(3),
    width: wp(86),
    marginBottom: wp(1),
    color: colors.primaryColor,
    textAlign: 'justify',
  },
  IconTextRow: {
    flexDirection: 'row',
    width: wp(92),
    backgroundColor: 'red',
    marginTop: wp(2),
    height: hp(10),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: wp(0.5),
    borderBottomColor: colors.borderColor,
  },
});

export default HelpDiskScreen;
