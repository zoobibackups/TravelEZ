import MEETANDGREET from '../../assets/svgs/MeetAndGreet.svg';
import OnAirport from '../../assets/svgs/OnAirport.svg';
import ParkAndRide from '../../assets/svgs/ParkAndRide.svg';
import { wp } from '../../constants/scaling';
export const parkingtypes = [
    {
        id: '1',
        heading: 'Meet & Greet',
        paragraph:
            'Meet and Greet is one of the easiest way to find the parking lot from the airport. All you have to do is to pre-book this package and reach the airport. The rest of the work is ours! The driver will receive you from the terminal and he will drive your car at the secure and monitored parking area. ',
        image: 'https://www.parkingzone.co.uk/assets/images/meet.jpg',
        icon: <MEETANDGREET width={wp(20)} height={wp(20)} />
    },
    {
        id: '2',
        heading: 'Park & Ride',
        paragraph:
            'If you do not want to drive your car by a chauffeur, you can drive your car yourself at the parking place and take the car keys with you. You can reach the terminal on the free shuttle bus service by the airport within 10 to 15 minutes.',
        image: 'https://www.parkingzone.co.uk/assets/images/pandr.png',
        icon: <ParkAndRide width={wp(20)} height={wp(20)} />
    },
    {
        id: '3',
        heading: 'On Airport',
        paragraph:
            'Our customers are not restricted to use only above two services. You can also choose On Airport service in which you can park your vehicle at a parking lot nearest to the terminal and reach the terminal by walking. Avail this offer and get up to 50% discount now!',
        image: 'https://www.parkingzone.co.uk/assets/images/onairport.jpg',
        icon: <OnAirport width={wp(20)} height={wp(20)} />
    }
];
