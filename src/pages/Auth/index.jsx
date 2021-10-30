import React from 'react';
import { LoginForm, RegisterForm } from 'modules';
import { Route } from 'react-router';

import './Auth.scss'

const index = () => {
    return (
        <section className="auth">
            <div className="auth__content">
                <Route path={["/", "/login"]} component={LoginForm} exact/>
                <Route path="/register" component={RegisterForm}/>
            </div>
        </section>
    )
}

export default index
