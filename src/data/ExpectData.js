import React from 'react';
import { View } from 'react-native';
import Quality from '../assets/svgs/Quality.svg';
import Loyality from '../assets/svgs/Loyality.svg';
import Secure from '../assets/svgs/Secure.svg';
import Support from '../assets/svgs/Support.svg';
import { wp } from '../constants/scaling';
export default [
    {
        id: '1',
        title: 'Quality Control',
        description:
            'We believe that our customers are our valuable assets. That is why we go an extra mile to achieve their complete satisfaction, as we make sure to provide them with the best quality parking services. Our customers are our strength, which is why we ensure that all our contractors meet quality standards.',
        icon: (
            <View style={{ alignSelf: 'center' }}>
                <Quality width={wp(20)} height={wp(20)} />
            </View>
        )
    },
    {
        id: '2',
        title: 'Customer Loyalty Platform',
        description:
            'If you are a loyal customer, then you are privileged to receive a special discount offer on your parking reservation. All you have to do is simply give your reference number or your email to receive your parking deal discount.',
        icon: (
            <View style={{ alignSelf: 'center' }}>
                <Loyality width={wp(20)} height={wp(20)} />
            </View>
        )
    },
    {
        id: '3',
        title: 'Simple and Secure Process',
        description:
            'Booking parking space on our website has never been so easy without our simple booking process. You do not have to worry about filling unnecessary details to get your parking reserved. Our user-friendly booking process is simply designed for your comfort so that you can reserve your parking in just a few clicks.',
        icon: (
            <View style={{ alignSelf: 'center' }}>
                <Secure width={wp(20)} height={wp(20)} />
            </View>
        )
    },
    {
        id: '4',
        title: 'Customer Support',
        description:
            'If you want to reserve your parking space or want to change an existing booking, then all you have to do is call us during office hours, on the phone number provided in your confirmation email. Our agent will get back to you for your query in no time.',
        icon: (
            <View style={{ alignSelf: 'center' }}>
                <Support width={wp(20)} height={wp(20)} />
            </View>
        )
    }
];
