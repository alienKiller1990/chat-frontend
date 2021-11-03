import React, { Component } from 'react';
import { Button, Block } from 'components';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const success = false;

const RegisterForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    return (
        <div>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <Block>
                {!success ? (
                    <Form onSubmit={handleSubmit} className="login-form">

                        <Form.Item
                            validateStatus={!touched.email ? '' : errors.email ? 'error' : 'success'}
                            help={!touched.email ? '' : errors.email}
                            name="email"
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
                            name="username"
                            hasFeedback
                            validateStatus={!touched.name ? '' : errors.name ? 'error' : 'success'}
                            help={!touched.name ? '' : errors.name}>
                            <Input
                                id="name"
                                prefix={<UserOutlined className="site-form-item-icon" style={{ color: '#ccc' }} />}
                                placeholder="Ваше имя"
                                size="large" 
                                onChange={handleChange}
                                onBlur={handleBlur} />
                        </Form.Item>


                        <Form.Item
                            hasFeedback
                            name="password"
                            validateStatus={!touched.password ? '' : errors.password ? 'error' : 'success'}
                            help={!touched.password ? '' : errors.password}>
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


                        <Form.Item >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" style={{ color: '#ccc' }} />}
                                type="password"
                                placeholder="Повторите пароль"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button onClick={handleSubmit} type="primary" htmlType="submit" size="large">
                                Зарегистрироваться
                            </Button>
                        </Form.Item>
                        <Link className="auth__register-link" to="/login">Войти в аккаунт</Link>
                    </Form>
                ) : (
                    <div className="auth__success-block">
                        <div>
                            <InfoCircleTwoTone style={{ fontSize: '48px' }} />
                        </div>
                        <h2>Потвердите свой аккаунт</h2>
                        <p>На вашу почту отправлено письмо с ссылкой на потверждение аккаунта</p>
                    </div>
                )}
            </Block>
        </div>
    )
}

export default RegisterForm