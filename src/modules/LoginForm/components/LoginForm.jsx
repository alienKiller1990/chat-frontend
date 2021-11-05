import React from 'react';
import { Button, Block } from 'components';
import { Form, Input } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';
import { validateField } from 'utils/helpers';

const LoginForm = props => {

    const {
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    return (
        <div>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста войдите в свой аккаунт</p>
            </div>
            < Block >
                <Form onSubmit={handleSubmit} className="login-form">

                    <Form.Item
                        validateStatus={validateField('email', touched, errors)}
                        help={!touched.email ? null : errors.email}
                        hasFeedback >
                        <Input
                            id="email"
                            prefix={<MailOutlined style={{ color: '#ccc' }} />}
                            placeholder="E-mail"
                            size="large"
                            onChange={handleChange}
                            onBlur={handleBlur} />
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        validateStatus={validateField('password', touched, errors)}
                        help={!touched.password ? null : errors.password}>
                        <Input
                            id="password"
                            prefix={<LockOutlined className="site-form-item-icon" style={{ color: '#ccc' }} />}
                            type="password"
                            placeholder="Пароль"
                            size="large"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button onClick={handleSubmit} type="primary" htmlType="submit" size="large">
                            Войти в аккаунт
                        </Button>
                    </Form.Item>
                    <Link className="auth__register-link" to="/register">Зарегистрироваться</Link>
                </Form>

            </Block >
        </div>
    )
}

export default LoginForm




