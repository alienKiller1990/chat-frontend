import React, { Component } from 'react';
import { Button, Block } from 'components';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
    render() {
        return (
            <div>
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста войдите в свой аккаунт</p>
                </div>
                <Block>
                    <Form className="login-form">
                        <Form.Item validateStatus="success" name="username" hasFeedback>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" size="large" />
                        </Form.Item>
                        <Form.Item name="password">
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" size="large">
                                Войти в аккаунт
                            </Button>
                        </Form.Item>
                        <Link className="auth__register-link" to="/register">Зарегистрироваться</Link>
                    </Form>
                </Block>
            </div>
        )
    }
}

export default LoginForm