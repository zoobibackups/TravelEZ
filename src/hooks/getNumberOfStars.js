const getStarsFromNumber = rating => {
    let tempStarArr = [];
    for (let index = 0; index < 5; index++) {
        let value = parseFloat(rating).toFixed(2) - index;

        if (index < parseInt(rating)) {
            if (value > 0 && value < 1) {
                tempStarArr.push('star-half-o');
            } else {
                tempStarArr.push('star');
            }
        } else {
            if (value > 0 && value < 1) {
                tempStarArr.push('star-half-o');
            } else {
                tempStarArr.push('star-o');
            }
        }
    }
    return tempStarArr;
};
export default getStarsFromNumber;
