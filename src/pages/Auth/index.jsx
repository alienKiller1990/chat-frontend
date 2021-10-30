import React from 'react';
import { Button, Block } from 'components';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { SmileOutlined } from '@ant-design/icons';

import './Auth.scss';

class Auth extends React.Component {


    render() {
        return (
            <section className="auth">
                <div className="auth__content">
                    <div className="auth__top">
                        <h2>Войти в аккаунт</h2>
                        <p>Пожалуйста войдите в свой аккаунт</p>
                    </div>
                    <Block>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                        >
                            <Form.Item
                                validateStatus="success"
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                                hasFeedback
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" size="large">
                                    Войти в аккаунт
                                </Button>
                            </Form.Item>
                            <a className="auth__register-link" href="#">Зарегистрироваться</a>
                        </Form>
                    </Block>
                </div>
            </section>
        )
    }
}


export default Auth
