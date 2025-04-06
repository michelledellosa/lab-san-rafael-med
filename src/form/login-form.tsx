"use client"
import { login_schema } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react';
import ErrorMsg from './error-msg';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const handleCheckbox = () => {
        setIsActive(!isActive);
    };

    const { handleSubmit, handleBlur, handleChange, values, errors, touched, setFieldValue } = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false
        },
        validationSchema: login_schema,
        onSubmit: (values, { resetForm }) => {
            toast.success("Login successfully")
            resetForm()
        }
    })
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Email Address <span>**</span></label>
                <input id="name" type="text"
                    name='email'
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter Username or Email address..."
                    required
                />
                {touched.email && <ErrorMsg error={errors.email} />}
                <label htmlFor="pass">Password <span>**</span></label>
                <input id="pass"
                    name='password'
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    placeholder="Enter password..."
                    required
                />
                {touched.password && <ErrorMsg error={errors.password} />}
                <div className="login-action mb-20 fix">
                    <span className="log-rem f-left">
                        <input
                            type="checkbox"
                            id="tp-remember"
                            name="rememberMe"
                            checked={values.rememberMe}
                            onChange={() => {
                                setFieldValue('rememberMe', !values.rememberMe);
                                handleCheckbox();
                            }}
                        />
                        <label htmlFor="tp-remember">Remember Me!</label>
                    </span>
                    <span className="forgot-login f-right">
                        <Link href="/forgot-password">Forgot Password?</Link>
                    </span>
                </div>
                <button disabled={isActive} type='submit'
                    className={isActive === false ? "login-disabled-btn" : "c-btn theme-btn-2 w-100"}>Login Now</button>
                <div className="or-divide"><span>or</span></div>
                <Link href="/register" className="c-btn theme-btn w-100">Register Now</Link>
            </form>
        </>
    );
};

export default LoginForm;