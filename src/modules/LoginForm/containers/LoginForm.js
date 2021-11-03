import { withFormik } from 'formik';
import LoginForm from '../components/LoginForm';
import validateForm from 'utils/validate'

export default withFormik({
    validate: values => {
        const errors = {};

        const validate = validateForm({ isAuth: true })

        Object.keys(values).forEach(key => validate[key] && validate[key](errors, values[key]));

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'LoginForm',
})(LoginForm);

