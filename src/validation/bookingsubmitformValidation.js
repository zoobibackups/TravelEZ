import {regex_email} from '../constants/theme';
const personalformvalidation = formdata => {
  return new Promise((resolve, reject) => {
    if (
      formdata.title == '' ||
      formdata.title == null ||
      formdata.title == undefined
    ) {
      reject({
        status: false,
        message: 'Please enter title',
      });
    }
    if (
      formdata.first_name == '' ||
      formdata.first_name == null ||
      formdata.first_name == undefined
    ) {
      reject({
        status: false,
        message: 'Please enter first name',
      });
    }
    if (
      formdata.last_name == '' ||
      formdata.last_name == null ||
      formdata.last_name == undefined
    ) {
      reject({
        status: false,
        message: 'Please enter last name',
      });
    }
    if (!regex_email.test(formdata.email_address)) {
      reject({
        status: false,
        message: 'Please enter valid email address',
      });
    }
    if (formdata.email_address != formdata.confrim_email_address) {
      reject({status: false, message: 'both emails must be same'});
    }
    if (
      formdata.mobile_number == '' ||
      formdata.mobile_number == null ||
      formdata.mobile_number == undefined ||
      formdata.mobile_number.length < 9 ||
      formdata.mobile_number.trim() == 0
    ) {
      reject({
        status: false,
        message: 'Please enter full number',
      });
    }

    resolve({
      status: true,
      message: 'Personal data validated sucessfully',
    });
  });
};
const HotelPersonalInformation = formdata => {
  return new Promise((resolve, reject) => {
    if (
      formdata.first_name == '' ||
      formdata.first_name == null ||
      formdata.first_name == undefined
    ) {
      reject({
        status: false,
        message: 'Please enter first name',
      });
    }
    if (
      formdata.last_name == '' ||
      formdata.last_name == null ||
      formdata.last_name == undefined
    ) {
      reject({
        status: false,
        message: 'Please enter last name',
      });
    }
    if (!regex_email.test(formdata.email_address)) {
      reject({
        status: false,
        message: 'Please enter valid email address',
      });
    }
    if (formdata.email_address != formdata.confrim_email_address) {
      reject({status: false, message: 'both emails must be same'});
    }
    if (
      formdata.mobile_number == '' ||
      formdata.mobile_number == null ||
      formdata.mobile_number == undefined ||
      formdata.mobile_number.length < 9 ||
      formdata.mobile_number.trim() == 0
    ) {
      reject({
        status: false,
        message: 'Please enter full number',
      });
    }

    resolve({
      status: true,
      message: 'Personal data validated sucessfully',
    });
  });
};
const vehicleformvalidation = vehicledata => {
  return new Promise((resolve, reject) => {
    if (
      vehicledata.vehicle_registration.trim() == '' ||
      vehicledata.vehicle_registration == null ||
      vehicledata.vehicle_registration == undefined
    ) {
      reject({
        status: false,
        message: 'Please enter vehicle registration number',
      });
    }
    if (
      vehicledata.vehicle_make.trim() == '' ||
      vehicledata.vehicle_make == null ||
      vehicledata.vehicle_make == undefined
    ) {
      reject({
        status: false,
        message: 'Please enter vehicle make',
      });
    }
    if (
      vehicledata.vehicle_color.trim() == '' ||
      vehicledata.vehicle_color == null ||
      vehicledata.vehicle_color == undefined
    ) {
      reject({
        status: false,
        message: 'Please enter vehicle color',
      });
    }
    if (
      vehicledata.vehicle_model.trim() == '' ||
      vehicledata.vehicle_model == null ||
      vehicledata.vehicle_model == undefined
    ) {
      reject({
        status: false,
        message: 'Please enter vehicle model',
      });
    }
    resolve({status: true, message: 'Vechile data Done'});
  });
};

const validate_billing_info = billing_details => {
  return new Promise((resolve, reject) => {
    if (
      billing_details.full_address.trim().length < 10 ||
      billing_details.full_address == null ||
      billing_details.full_address == undefined
    ) {
      reject({
        status: false,
        message: 'Please enter full address',
      });
    }
    if (
      billing_details.city.trim().length < 3 ||
      billing_details.city == null ||
      billing_details.city == undefined
    ) {
      reject({
        status: false,
        message: 'Please enter city name',
      });
    }
    if (
      billing_details.state_provience.trim().length < 3 ||
      billing_details.state_provience == null ||
      billing_details.state_provience == undefined
    ) {
      reject({
        status: false,
        message: 'Please enter state/provience',
      });
    }
    if (
      billing_details.zip_code.trim().length < 2 ||
      billing_details.zip_code == null ||
      billing_details.zip_code == undefined
    ) {
      reject({
        status: false,
        message: `Please enter zip code ${billing_details.zip_code}`,
      });
    }
    if (
      billing_details.country.trim().length < 2 ||
      billing_details.country == null ||
      billing_details.country == undefined
    ) {
      reject({
        status: false,
        message: 'Please enter country name',
      });
    }

    resolve({status: true, message: 'Data validated successfully'});
  });
};
export {
  personalformvalidation,
  HotelPersonalInformation,
  vehicleformvalidation,
  validate_billing_info,
};
