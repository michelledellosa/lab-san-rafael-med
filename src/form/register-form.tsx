"use client"
import { register_schema } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import ErrorMsg from './error-msg';
import Link from 'next/link';

const RegisterForm = () => {
    const { handleSubmit, handleBlur, handleChange, values, errors, touched } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: register_schema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            toast.success("Register successfully")
            resetForm()
        }
    })
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Username <span>**</span></label>
                <input
                    name='name'
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    type="text"
                    placeholder="Enter Username or Email address..."
                />
                {touched.name && <ErrorMsg error={errors.name} />}
                <label htmlFor="email-id">Email Address <span>**</span></label>
                <input type="text"
                    name='email'
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter Username or Email address..."
                    required
                />
                {touched.email && <ErrorMsg error={errors.email} />}
                <label htmlFor="pass">Password <span>**</span></label>
                <input
                    name='password'
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    placeholder="Enter password..."
                    required
                />
                {touched.password && <ErrorMsg error={errors.password} />}
                <div className="mt-10"></div>

                <button className="c-btn theme-btn-2 w-100">Register Now</button>

                <div className="or-divide"><span>or</span></div>
                <Link href="/login" className="c-btn theme-btn w-100">login Now</Link>
            </form>
        </>
    );
};

export default RegisterForm;