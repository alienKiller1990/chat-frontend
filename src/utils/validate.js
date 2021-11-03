export default ({ isAuth }) => ({

    email: (errors, value) => {
        if (!value) {
            errors.email = 'Введите email';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            errors.email = 'Невалидный email';
        }
    },

    password: (errors, value, isAuth) => {
        if (!value) {
            errors.password = 'Введите пароль'
        } else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/.test(value)) {
            errors.password = isAuth ? 'Неверный пароль' : 'Пароль должен содержать строчные и прописные буквы и цифры';
        }
    },

    name: (errors, value, isAuth) => {

        if (!value) {
            errors.name = 'Введите Имя'
        }
        else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/.test(value)) {
            errors.name = 'Имя должно содержать строчные и прописные буквы и цифры'
        }
    }
});

