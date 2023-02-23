import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomHeader from '../../components/CustomHeader';
import ErrorComponent from '../../components/ErrorComponent';
import LoadingComponent from '../../components/LoadingComponent';
import MainRoutes from '../../constants/MainRoutes';
import {wp} from '../../constants/scaling';
import {colors} from '../../constants/theme';
import {usePagesQuery} from '../../store/services/tasksApi';
import {textStyles} from '../../styles/textStyles';

const AirportsListScreen = ({navigation}) => {
  const {data, isLoading, isError, isFetching, isSuccess} = usePagesQuery({
    type: 'AP',
    linkmatch: 'static_pages',
  });
  if (isLoading || isFetching) {
    return <LoadingComponent navigation={navigation} />;
  }
  if (isError) {
    return <ErrorComponent navigation={navigation} />;
  }
  if (isSuccess) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          paddingBottom: 10,
          backgroundColor: colors.white,
        }}>
        <CustomHeader
          title={'Airports'}
          show_backButton={true}
          isdrawer={true}
          onPress={() => navigation.openDrawer()}
        />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {data.data.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(MainRoutes.AirportsDetailsScreen, {
                    item: item,
                    airports: data.data,
                  })
                }
                key={`${index}`}
                style={styles.parkingTypecardView}>
                <View
                  style={{
                    width: wp(24),
                    height: wp(24),
                    padding: wp(2),
                    borderRadius: wp(2),
                    backgroundColor: '#0001',
                  }}>
                  <Image
                    source={{
                      uri: `https://www.parkingzone.co.uk/storage/app/${item.profile_image}`,
                    }}
                    style={{
                      width: wp(20),
                      height: wp(20),
                      borderRadius: wp(2),
                      resizeMode: 'cover',
                    }}
                  />
                </View>
                <View style={{paddingHorizontal: wp(2)}}>
                  <Text
                    style={{
                      ...styles.heading,
                    }}>
                    {item.page_title}
                  </Text>

                  <Text numberOfLines={4} style={styles.parapgraph}>
                    {item.meta_description}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default AirportsListScreen;
const styles = StyleSheet.create({
  parkingTypecardView: {
    elevation: 5,
    flexDirection: 'row',
    borderRadius: wp(2),
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginHorizontal: wp(1),
    marginVertical: wp(2),
    padding: wp(2),
    width: wp(96),
  },
  heading: {
    ...textStyles.heading,
    fontSize: RFValue(14),
    lineHeight: RFValue(14) * 1.5,
    textAlign: 'justify',
  },
  parapgraph: {
    ...textStyles.Label,
    fontSize: RFValue(12),
    lineHeight: RFValue(12) * 1.5,
    color: colors.textPrimaryColor,
    textAlign: 'justify',
    width: wp(64),
  },
});
