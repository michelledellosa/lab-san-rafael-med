import React from 'react';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import ErrorMsgTwo from './error-msg-two';
import ErrorMsg from './error-msg';

const ContactForm = () => {
    const handleSendEmail = (values:any) => {
        const { name, email, number, comment } = values;
        const subject = 'Mensaje desde web Laboratorio San Rafael';
        const body = ` ${comment}`;
        window.open(`mailto:info@labsanrafael.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    };

    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                name: "",
                email: "",
                number: "",
                comment: "",
            },
            onSubmit: async (values, { resetForm }) => {
                try {
                    handleSendEmail(values);
                    toast.success("Abriendo la aplicación de correo electrónico...");
                    resetForm();
                } catch (error) {
                    console.error("Error al abrir la aplicación de correo electrónico:", error);
                    toast.error("Error al abrir la aplicación de correo electrónico. Por favor inténtalo de nuevo más tarde.");
                }
            },
        });

    return (
        <>
            <form className="contacts-form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="contacts-icon contactss-name">
                            <div className='contact-field'>
                                <input
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    placeholder="Ingresa nombre y apellido"
                                />
                                {touched.name && <ErrorMsg error={errors.name} />}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="contacts-icon contactss-email">
                            <div className='contact-field'>
                                <input
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="email"
                                    id="email"
                                    required
                                    placeholder="Ingresa tu email"
                                />
                                {touched.email && <ErrorMsgTwo error={errors.email} />}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="contacts-icon contactss-website">
                            <div className="contact-field">
                                <input
                                    name="number"
                                    value={values.number}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    placeholder="Ingresa tu número de teléfono"
                                    id="number"
                                />
                                {touched.number && <ErrorMsgTwo error={errors.number} />}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="contacts-icon contactss-message">
                            <div className="contact-field">
                                <textarea name="comment"
                                    cols={30} rows={10}
                                    value={values.comment}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Tu mensaje..."
                                ></textarea>
                                {touched.comment && <ErrorMsgTwo error={errors.comment} />}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="contacts-form-button text-center">
                            <button type='submit' className="c-btn">
                                Enviar mensaje <i className="far fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;
