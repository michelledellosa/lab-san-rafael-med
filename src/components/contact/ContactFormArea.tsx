import ContactForm from '@/form/contact-form';
import React from 'react';

const ContactFormArea = () => {
    return (
        <>
            <div className="contact-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div className="section-title text-center mb-65">
                                <h2>Envíanos un mensaje</h2>
                                <p>Nos puedes dejar un mensaje para soporte, opinion, duda o asesoría.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactFormArea;