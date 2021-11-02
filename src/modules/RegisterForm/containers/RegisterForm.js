import { withFormik } from 'formik';
import RegisterForm from '../components/RegisterForm';

export default withFormik({
    validate: values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Required';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if(!values.password) {
            errors.password = 'Введите пароль'
        }
        else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/.test(values.password)) {
            errors.password = 'Пароль должен содержать строчные и прописные буквы и цифры'
        }

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegisterForm',
})(RegisterForm);

