import moment from 'moment';
const transferformvalidation = ({
  pick_up_location,
  drop_off_location,
  pickup_date,
  drop_off_date,
  is_return,
}) => {
  return new Promise((resolve, reject) => {
    if (pick_up_location == null || pick_up_location == undefined) {
      reject({
        status: false,
        message: 'Please select pick up location',
      });
    }
    if (drop_off_location == null || drop_off_location == undefined) {
      reject({
        status: false,
        message: 'Please select pick up location',
      });
    }
    if (is_return) {
      if (!moment(pickup_date).isBefore(drop_off_date)) {
        reject({
          status: false,
          message: 'Pickup date must be earlier then drop off date',
        });
      }
    }
    resolve({status: true, message: 'Form validated sucessfully'});
  });
};

export default transferformvalidation;
