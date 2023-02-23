import {RFValue} from 'react-native-responsive-fontsize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const getAmenitiesHeaderIcons = group_name => {
  if (group_name == 'Rooms') {
    return <FontAwesome color={'#fff'} size={RFValue(20)} name={'home'} />;
  } else if (group_name == 'Accessibility') {
    return <FontAwesome color={'#fff'} size={RFValue(20)} name="random" />;
  } else if (group_name == 'Room Amenities') {
    return <FontAwesome color={'#fff'} size={RFValue(20)} name="th" />;
  } else if (group_name == 'Meals') {
    return <FontAwesome color={'#fff'} size={RFValue(20)} name="cutlery" />;
  } else if (group_name == 'Internet') {
    return <FontAwesome color={'#fff'} size={RFValue(20)} name="wifi" />;
  } else if (group_name == 'Transfer') {
    return <FontAwesome color={'#fff'} size={RFValue(20)} name="taxi" />;
  } else if (group_name == 'Languages Spoken') {
    return <FontAwesome color={'#fff'} size={RFValue(20)} name="globe" />;
  } else if (group_name == 'Parking') {
    return <FontAwesome color={'#fff'} size={RFValue(20)} name="car" />;
  } else if (group_name == 'Business') {
    return (
      <FontAwesome color={'#fff'} size={RFValue(20)} name="shopping-bag" />
    );
  } else if (group_name == 'Beauty and wellness') {
    return <FontAwesome color={'#fff'} size={RFValue(20)} name="briefcase" />;
  } else if (group_name == 'Kids') {
    return <FontAwesome color={'#fff'} size={RFValue(20)} name="child" />;
  } else if (group_name == 'Pets') {
    return <FontAwesome color={'#fff'} size={RFValue(20)} name="paw" />;
  } else if (group_name == 'Health and Safety Measures') {
    return <FontAwesome color={'#fff'} size={RFValue(20)} name="medkit" />;
  } else if (group_name == 'Sports') {
    return <FontAwesome color={'#fff'} size={RFValue(20)} name="support" />;
  } else if (group_name == 'Pool and beach') {
    return <FontAwesome color={'#fff'} size={RFValue(20)} name="umbrella" />;
  } else {
    return <FontAwesome color={'#fff'} size={RFValue(20)} name="support" />;
  }
};

export default getAmenitiesHeaderIcons;
