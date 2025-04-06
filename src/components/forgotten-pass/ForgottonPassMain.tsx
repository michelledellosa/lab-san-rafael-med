import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import InstragramArea from '../home/InstragramArea';
import ForgotForm from '@/form/forgot-form';

const ForgottonPassMain = () => {
    return (
        <>
            <Breadcrumb title='Forgot Password?' subTitle='Forgot Password?' />
            <section className="login-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="basic-login">
                                <h3 className="text-center mb-30">Forgot Password?</h3>
                                <p className='text-center'>Enter your email address to request password reset.</p>
                                <ForgotForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <InstragramArea />
        </>
    );
};

export default ForgottonPassMain;