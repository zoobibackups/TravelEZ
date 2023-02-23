const LoungesBookingFormValidation = (
  airPort,

  pickUpTime,
  pickUpDate,
) => {
  return new Promise((resolve, reject) => {
    if (airPort == '' || airPort == null || airPort == undefined) {
      reject({status: false, message: 'Please select airport'});
    }

    if (pickUpTime == '' || pickUpTime == null || pickUpTime == undefined) {
      reject({status: false, message: 'Please select pickup time'});
    }
    if (pickUpDate == '' || pickUpDate == null || pickUpDate == undefined) {
      reject({status: false, message: 'Please select pickup date'});
    }

    resolve({status: true, message: 'Form validated sucessfully'});
  });
};

export {LoungesBookingFormValidation};
