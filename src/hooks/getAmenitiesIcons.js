const getAmenitiesIcons = amenity_groups => {
    let tempStarArr = [];
    amenity_groups.forEach(element => {
        if (element.group_name == 'Rooms') {
            tempStarArr.push('home');
        } else if (element.group_name == 'Accessibility') {
            tempStarArr.push('random');
        } else if (element.group_name == 'Room Amenities') {
            tempStarArr.push('th');
        } else if (element.group_name == 'Meals') {
            tempStarArr.push('cutlery');
        } else if (element.group_name == 'Internet') {
            tempStarArr.push('wifi');
        } else if (element.group_name == 'Transfer') {
            tempStarArr.push('taxi');
        } else if (element.group_name == 'Languages Spoken') {
            tempStarArr.push('globe');
        } else if (element.group_name == 'Parking') {
            tempStarArr.push('car');
        } else if (element.group_name == 'Business') {
            tempStarArr.push('shopping-bag');
        } else if (element.group_name == 'Beauty and wellness') {
            tempStarArr.push('briefcase');
        } else if (element.group_name == 'Kids') {
            tempStarArr.push('child');
        } else if (element.group_name == 'Pets') {
            tempStarArr.push('paw');
        } else if (element.group_name == 'Health and Safety Measures') {
            tempStarArr.push('medkit');
        } else if (element.group_name == 'Sports') {
            tempStarArr.push('support');
        } else if (element.group_name == 'Pool and beach') {
            tempStarArr.push('umbrella');
        }
    });
    return tempStarArr;
};

export default getAmenitiesIcons;
