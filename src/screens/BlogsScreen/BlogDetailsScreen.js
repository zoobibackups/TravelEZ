import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomHeader from '../../components/CustomHeader';
import { wp } from '../../constants/scaling';
import { colors, fonts } from '../../constants/theme';
import { textStyles } from '../../styles/textStyles';
const BlogDetailsScreen = ({ navigation, route }) => {
    const item = route.params.item;
    let decscription = item.content.replace(/<\/?[^>]+(>|$)/g, '');
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: colors.white,
                width: wp(100)
            }}>
            <CustomHeader
                title={'Blog Read'}
                show_backButton={true}
                isdrawer={false}
                onPress={() => navigation.goBack()}
            />
            <ScrollView>
                <View style={styles.mainCardView}>
                    <Image
                        style={styles.ImageView}
                        source={{
                            uri: `https://www.parkingzone.co.uk/storage/app/${item.banner}`
                        }}
                    />
                    <View style={styles.BlogView}>
                        <Text style={styles.blogheadingText}>
                            {item.page_title}
                        </Text>
                        <Text style={styles.blogparagraphtext}>
                            {decscription}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BlogDetailsScreen;

const styles = StyleSheet.create({
    mainCardView: {
        padding: wp(1),

        borderRadius: wp(2),
        backgroundColor: '#fffff',
        margin: wp(2),

        width: wp(96)
    },
    ImageView: {
        width: wp(94),
        borderRadius: wp(2),
        borderColor: colors.secondaryColor,
        borderWidth: wp(0.5),
        height: wp(60)
    },
    BlogView: {
        width: wp(92),
        overflow: 'hidden',
        borderRadius: wp(1),
        paddingLeft: wp(2),
        backgroundColor: colors.white
    },
    blogheadingText: {
        ...textStyles.heading,
        fontSize: RFValue(14),
        marginVertical: wp(2),
        includeFontPadding: false,
        color: colors.textPrimaryColor
    },
    blogparagraphtext: {
        ...textStyles.Label,
        textAlign: 'justify',
        fontSize: RFValue(13),
        fontFamily: fonts.Medium,
        color: colors.secondaryTextColor
    }
});
