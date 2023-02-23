const getAirportFeatureIcons = amenity_groups => {
  let tempStarArr = [];
  amenity_groups.forEach(element => {
    if (element == 'CCTV') {
      tempStarArr.push('video-camera');
    } else if (element == 'SECURE BARRIER') {
      tempStarArr.push('shield');
    } else if (element == 'DISABILITY FRIENDLY') {
      tempStarArr.push('wheelchair');
    } else if (element == 'FENCING') {
      tempStarArr.push('lightbulb-o');
    } else if (element == 'PATROLLED') {
      tempStarArr.push('male');
    } else if (element == 'YOU LEAVE YOUR KEYS') {
      tempStarArr.push('key');
    } else if (element == 'BUSINESS FRENDLY') {
      tempStarArr.push('suitcase');
    } else if (element == 'FAMILY FRENDLY') {
      tempStarArr.push('users');
    } else {
      tempStarArr.push('lightbulb-o');
    }
  });
  return tempStarArr;
};

export default getAirportFeatureIcons;
