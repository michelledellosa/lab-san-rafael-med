import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import LoginForm from '@/form/login-form';
import InstragramArea from '../home/InstragramArea';

const LoginMainArea = () => {
    return (
        <>
            <Breadcrumb title='Login' subTitle='Login' />
            <section className="login-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="basic-login">
                                <h3 className="text-center mb-60">Login From Here</h3>
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <InstragramArea />
        </>
    );
};

export default LoginMainArea;