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
                        <Form.Item validateStatus="success" name="username" hasFeedback>
                            <Input prefix={<UserOutlined className="site-form-item-icon" style={{ color: '#ccc' }} />} placeholder="Ваше имя" size="large" />
                        </Form.Item>
                        <Form.Item validateStatus="success" name="email" hasFeedback>
                            <Input prefix={<MailOutlined style={{ color: '#ccc' }} />} placeholder="E-mail" size="large" />
                        </Form.Item>
                        <Form.Item name="password">
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" style={{ color: '#ccc' }} />}
                                type="password"
                                placeholder="Пароль"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item name="password">
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" style={{ color: '#ccc' }} />}
                                type="password"
                                placeholder="Повторите пароль"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" size="large">
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