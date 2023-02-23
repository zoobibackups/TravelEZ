import moment from 'moment';
const hotelSearchFromValidation = (
  select_hotel,
  pickup_date,
  departure_date,
) => {
  return new Promise((resolve, reject) => {
    if (
      select_hotel == '' ||
      select_hotel == null ||
      select_hotel == undefined
    ) {
      reject({status: false, message: 'Please select hotel or region'});
    }
    if (pickup_date == '' || pickup_date == null || pickup_date == undefined) {
      reject({status: false, message: 'Please select pickup date'});
    }
    if (
      departure_date == '' ||
      departure_date == null ||
      departure_date == undefined
    ) {
      reject({status: false, message: 'Please select dropoff date'});
    }
    if (!moment(pickup_date).isBefore(departure_date)) {
      reject({
        status: false,
        message: 'Pick  up date must of earlier then drop off date',
      });
    }
    resolve({status: true, message: 'Form validated sucessfully'});
  });
};

export default hotelSearchFromValidation;
