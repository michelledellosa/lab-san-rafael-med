import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import RegisterForm from '@/form/register-form';
import InstragramArea from '../home/InstragramArea';

const RegisterMainArea = () => {
    return (
        <>
            <Breadcrumb title='Register' subTitle='Register' />
            <section className="login-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="basic-login">
                                <h3 className="text-center mb-60">Signup From Here</h3>
                                <RegisterForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <InstragramArea />
        </>
    );
};

export default RegisterMainArea;