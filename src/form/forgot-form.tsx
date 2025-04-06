"use client"
import { forgotten_schema } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
import ErrorMsg from './error-msg';
import { toast } from 'react-toastify';

const ForgotForm = () => {

    const { handleSubmit, handleBlur, handleChange, values, errors, touched } = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: forgotten_schema,
        onSubmit: (values, { resetForm }) => {
            toast.success("Login successfully")
            resetForm()
        }
    })
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input id="name" type="text"
                    name='email'
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    required
                />
                {touched.email && <ErrorMsg error={errors.email} />}
                <div className="login-action mb-20 fix">
                    <span className="forgot-login">
                        Remember your password?
                        <Link href="/login">Login</Link>
                    </span>
                </div>
                <button type='submit'
                    className="login-disabled-btn">Send Request</button>
            </form>
        </>
    );
};

export default ForgotForm;