import { regex_email } from '../constants/theme';
const helpdiskFormValidation = formdata => {
    return new Promise((resolve, reject) => {
        if (
            formdata.booking_ref == '' ||
            formdata.booking_ref.trim() == '' ||
            formdata.booking_ref == null ||
            formdata.booking_ref == undefined
        ) {
            reject({
                status: false,
                message: 'Please enter booking ref'
            });
        }
        if (
            formdata.name == '' ||
            formdata.name.trim() == '' ||
            formdata.name == null ||
            formdata.name == undefined
        ) {
            reject({ status: false, message: 'Please enter your full name' });
        }
        if (!regex_email.test(formdata.email)) {
            reject({ status: false, message: 'Please enter correct email' });
        }

        if (
            formdata.contact == '' ||
            formdata.contact.trim() == '' ||
            formdata.contact == null ||
            formdata.contact == undefined
        ) {
            reject({ status: false, message: 'Please enter booking contact' });
        }
        if (
            formdata.department == '' ||
            formdata.department.trim() == '' ||
            formdata.department == null ||
            formdata.department == undefined
        ) {
            reject({
                status: false,
                message: 'Please select support department'
            });
        }
        if (
            formdata.urgency == '' ||
            formdata.urgency.trim() == '' ||
            formdata.urgency == null ||
            formdata.urgency == undefined
        ) {
            reject({
                status: false,
                message: 'Please select ticket priority'
            });
        }
        if (
            formdata.title == '' ||
            formdata.title.trim() == '' ||
            formdata.title == null ||
            formdata.title == undefined
        ) {
            reject({
                status: false,
                message: 'Please enter  ticket subject'
            });
        }
        if (
            formdata.ticket_message == '' ||
            formdata.ticket_message.trim() == '' ||
            formdata.ticket_message == null ||
            formdata.ticket_message == undefined
        ) {
            reject({
                status: false,
                message: 'Please enter ticket message'
            });
        }
        if (formdata.term_of_services != true) {
            reject({
                status: false,
                message: 'Please accept term of services'
            });
        }
        if (
            formdata.file == '' ||
            formdata.file.trim() == '' ||
            formdata.file == null ||
            formdata.file == undefined
        ) {
            reject({
                status: false,
                message: 'Please upload a file'
            });
        }

        resolve({ status: true, message: 'Form validated sucessfully' });
    });
};

export { helpdiskFormValidation };
