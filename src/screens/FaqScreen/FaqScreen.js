import React from 'react';
import {
    SafeAreaView,
    SectionList,
    StatusBar,
    StyleSheet,
    Text
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomHeader from '../../components/CustomHeader';
import ErrorComponent from '../../components/ErrorComponent';
import LoadingComponent from '../../components/LoadingComponent';
import { wp } from '../../constants/scaling';
import { colors, fonts } from '../../constants/theme';
import { useFaqQuery } from '../../store/services/tasksApi';
import FaqItem from './FaqItem';
const Item = ({ item }) => <FaqItem item={item} />;
const FaqScreen = ({ navigation }) => {
    const { data, isLoading, isFetching, isError, isSuccess } = useFaqQuery();
    if (isError) {
        return <ErrorComponent navigation={navigation} />;
    }
    if (isFetching || isLoading) {
        return <LoadingComponent navigation={navigation} />;
    }
    if (isSuccess) {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <CustomHeader
                    title={"FAQ's"}
                    show_backButton={true}
                    isdrawer={true}
                    onPress={() => navigation.openDrawer()}
                />
                <SectionList
                    sections={data.data}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item item={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
            </SafeAreaView>
        );
    }
};

export default FaqScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },

    header: {
        fontSize: RFValue(16),
        backgroundColor: colors.primaryColor,
        color: '#fff',
        fontFamily: fonts.Bold,
        margin: wp(2),
        borderRadius: wp(1),
        padding: wp(2),
        paddingLeft: wp(5)
    }
});
