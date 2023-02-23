import moment from 'moment';
import Toast from 'react-native-toast-message';
const searchFromValidation = (
    airPort,
    dropOffTime,
    pickUpTime,
    pickUpDate,
    dropOffDate
) => {
    return new Promise((resolve, reject) => {
        if (airPort == '' || airPort == null || airPort == undefined) {
            Toast.show({
                type: 'error',
                text1: 'Form Error',
                position: 'bottom',
                text2: 'Please select airport'
            });
            reject({ status: false, message: 'Please select airport' });
        }
        if (
            dropOffTime == '' ||
            dropOffTime == null ||
            dropOffTime == undefined
        ) {
            Toast.show({
                type: 'error',
                text1: 'Form Error',
                position: 'bottom',
                text2: 'Please select dropoff time.'
            });
            reject({ status: false, message: 'Please select dropoff time.' });
        }
        if (pickUpTime == '' || pickUpTime == null || pickUpTime == undefined) {
            Toast.show({
                type: 'error',
                text1: 'Form Error',
                position: 'bottom',
                text2: 'Please select pickup time'
            });
            reject({ status: false, message: 'Please select pickup time' });
        }
        if (pickUpDate == '' || pickUpDate == null || pickUpDate == undefined) {
            Toast.show({
                type: 'error',
                text1: 'Form Error',
                position: 'bottom',
                text2: 'Please select pickup date'
            });
            reject({ status: false, message: 'Please select pickup date' });
        }
        if (
            dropOffDate == '' ||
            dropOffDate == null ||
            dropOffDate == undefined
        ) {
            Toast.show({
                type: 'error',
                text1: 'Form Error',
                position: 'bottom',
                text2: 'Please select dropoff time.'
            });
            reject({ status: false, message: 'Please select dropoff date' });
        }
        if (!moment(pickUpDate).isBefore(dropOffDate)) {
            Toast.show({
                type: 'error',
                text1: 'Form Error',
                position: 'bottom',
                text2: 'Pick-up date must be earlier then drop off date'
            });
            reject({ status: false, message: 'Please select dropoff date' });
        }
        resolve({ status: true, message: 'Form validated sucessfully' });
    });
};

export { searchFromValidation };
