import React from 'react';
import { View } from 'react-native';
import Done from '../assets/svgs/Done.svg';
import Offers from '../assets/svgs/Offers.svg';
import Search from '../assets/svgs/Search.svg';
import Wallet from '../assets/svgs/Wallet.svg';
import { wp } from '../constants/scaling';
const BookingProcess = [
    {
        id: '01',
        title: 'Search',
        image: (
            <View style={{ alignSelf: 'center' }}>
                <Search width={wp(40)} height={wp(40)} />
            </View>
        ),
        description:
            'You can select the airport you are flying from and the dates you are willing to travel. Click the ‘Search’ button and this will lead you to the next step where you will see all the available options of parking slots on that airport.'
    },
    {
        id: '02',
        title: 'Select Type',
        image: (
            <View style={{ alignSelf: 'center' }}>
                <Offers width={wp(40)} height={wp(40)} />
            </View>
        ),
        description:
            'In the next step you will get all available choices where you can select any of the car parking operator offers according to your needs by selecting book now button and this will lead you to the next step towards the booking process.'
    },
    {
        id: '03',
        title: 'Make Payment',
        image: (
            <View style={{ alignSelf: 'center' }}>
                <Wallet width={wp(40)} height={wp(40)} />
            </View>
        ),
        description:
            'In this step you will put your booking details, travel and vehicle details, payment details and then click on the ‘Make Payment’ button to confirm your booking.'
    },
    {
        id: '04',
        title: 'All Done',
        image: (
            <View style={{ alignSelf: 'center' }}>
                <Done width={wp(40)} height={wp(40)} />
            </View>
        ),
        description:
            'After finishing first three steps, our booking system will automatically send a confirmation email with all on the day of arrival car vehicle handover process via email you provided during this process.'
    }
];

export default BookingProcess;
