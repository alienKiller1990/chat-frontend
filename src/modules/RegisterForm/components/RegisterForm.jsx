import React, { Component } from 'react';
import { Button, Block } from 'components';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class RegisterForm extends Component {
    render() {
        return (
            <div>
                <div className="auth__top">
                    <h2>Регистрация</h2>
                    <p>Для входа в чат, вам нужно зарегистрироваться</p>
                </div>
                <Block>
                    <Form className="login-form">
                        <Form.Item validateStatus="success" name="username" hasFeedback>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Ваше имя" size="large" />
                        </Form.Item>
                        <Form.Item validateStatus="success" name="username" hasFeedback>
                            <Input prefix={<MailOutlined />} placeholder="E-mail" size="large" />
                        </Form.Item>
                        <Form.Item name="password">
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Пароль"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item name="password">
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
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
                </Block>
            </div>
        )
    }
}

export default RegisterForm