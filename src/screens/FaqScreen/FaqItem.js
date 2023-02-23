import React, { useRef, useState } from 'react';
import {
    Animated,
    Easing,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Entypo from 'react-native-vector-icons/Entypo';
import { wp } from '../../constants/scaling';
import { colors, fonts } from '../../constants/theme';
import { textStyles } from '../../styles/textStyles';
const FaqItem = ({ item }) => {
    const [open, setOpen] = useState(false);
    const animatedController = useRef(new Animated.Value(0)).current;
    const [bodySectionHeight, setBodySectionHeight] = useState(100);

    const bodyHeight = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: [0, bodySectionHeight]
    });

    const arrowAngle = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0rad', `${Math.PI}rad`]
    });

    const toggleListItem = () => {
        if (open) {
            Animated.timing(animatedController, {
                duration: 300,
                toValue: 0,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(animatedController, {
                duration: 300,
                toValue: 1,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false
            }).start();
        }
        setOpen(!open);
    };

    return (
        <View style={styles.item}>
            <TouchableOpacity
                onPress={() => toggleListItem()}
                style={styles.headingTextView}>
                <Text style={styles.headingText}>{item.title}</Text>
                <Animated.View style={{ transform: [{ rotateZ: arrowAngle }] }}>
                    <Entypo
                        name={'chevron-small-down'}
                        color={'#000'}
                        size={RFValue(24)}
                    />
                </Animated.View>
            </TouchableOpacity>

            <Animated.View
                style={{
                    backgroundColor: '#fff',

                    width: wp(92),
                    paddingHorizontal: wp(1),
                    height: bodyHeight,
                    overflow: 'hidden'
                }}>
                <View
                    style={styles.bodyContainer}
                    onLayout={event => {
                        setBodySectionHeight(event.nativeEvent.layout.height);
                    }}>
                    <Text style={styles.detailsText}>
                        {item.content.replace(/<[^>]+>/g, '')}
                    </Text>
                </View>
            </Animated.View>
        </View>
    );
};

export default FaqItem;

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 20,
        elevation: 5,
        margin: wp(2),
        borderRadius: wp(2),
        padding: wp(2)
    },
    bodyContainer: {
        minHeight: 100,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0
    },
    header: {
        fontSize: RFValue(16),
        backgroundColor: colors.primaryColor,
        color: '#fff',
        fontFamily: fonts.Bold,
        margin: wp(2),
        borderRadius: wp(1),
        padding: wp(2)
    },
    detailsText: {
        ...textStyles.Label,

        paddingHorizontal: wp(0.8),
        color: colors.primaryColor,
        textAlign: 'justify'
    },
    headingTextView: {
        backgroundColor: '#fff',
        padding: wp(2),

        borderRadius: wp(0),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headingText: {
        ...textStyles.smallheading,
        includeFontPadding: false,
        maxWidth: wp(80)
    }
});
