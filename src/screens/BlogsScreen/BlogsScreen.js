import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomHeader from '../../components/CustomHeader';
import ErrorComponent from '../../components/ErrorComponent';
import ErrorModal from '../../components/ErrorModal';
import LoadingComponent from '../../components/LoadingComponent';
import {wp} from '../../constants/scaling';
import {colors} from '../../constants/theme';
import {usePagesQuery} from '../../store/services/tasksApi';
import BlogCard from './BlogCard';

const BlogsScreen = ({navigation}) => {
  const {data, isLoading, isError, isFetching, isSuccess} = usePagesQuery({
    type: 'post',
    linkmatch: 'blogs',
  });

  if (isLoading || isFetching) {
    return <LoadingComponent navigation={navigation} />;
  }
  if (isError) {
    return <ErrorComponent navigation={navigation} />;
  }

  const renderItem = ({item, index}) => {
    return <BlogCard item={item} index={index} />;
  };
  if (isSuccess) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.white,
          width: wp(100),
        }}>
        <CustomHeader
          title={'Blogs'}
          show_backButton={true}
          isdrawer={true}
          onPress={() => navigation.openDrawer()}
        />
        <FlatList
          legacyImplementation={true}
          horizontal={false}
          windowSize={150}
          removeClippedSubviews={true}
          initialNumToRender={26}
          updateCellsBatchingPeriod={30}
          onEndReachedThreshold={0.7}
          refreshing={true}
          maxToRenderPerBatch={20}
          data={data.data}
          renderItem={renderItem}
        />
        <ErrorModal isVisible={false} />
      </SafeAreaView>
    );
  }
};

export default BlogsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: hp(100) / 1.1,
  },
});
