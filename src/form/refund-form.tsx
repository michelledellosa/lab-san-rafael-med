"use client";
import { refundSchema } from "@/utils/validation-schema";
import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import ErrorMsg from "./error-msg";

const RefundForm = () => {
    const { handleSubmit, handleBlur, handleChange, values, touched, errors, resetForm } = useFormik({
        initialValues: {
            name: "",
            productId: "",
            paymentId: "",
            phone: "",
            email: "",
            productName: "",
            message: ""
        },
        validationSchema: refundSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            toast.success("Your refund has been processed successfully. Thank you for your patience!")
            resetForm()
        }
    })
    return (
        <>
            <section className="bd-Contact__area pt-10">
                <div className="container">
                    <div className="row g-0 justify-content-center">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                            <div className="bd-contact__main-wrapper mb-70">
                                <div className="bd-section__title-wrapper">
                                    <h2 className="bd-section__title mb-30">
                                        Request For Refund
                                    </h2>
                                </div>
                                <div className="bd-contact__form">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="bd-single__form-input mb-20">
                                                    <input
                                                        type="text"
                                                        placeholder="Name"
                                                        name="name"
                                                        value={values.name}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        id="name"
                                                        required
                                                    />
                                                    {touched.name && <ErrorMsg error={errors.name} />}
                                                </div>

                                                <div className="bd-single__form-input mb-20">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter product id"
                                                        name="productId"
                                                        value={values.productId}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        id="productid"
                                                        required
                                                    />
                                                    {touched.productId && <ErrorMsg error={errors.productId} />}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="bd-single__form-input mb-20">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter payment id"
                                                        name="paymentId"
                                                        value={values.paymentId}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        id="paymentId"
                                                        required
                                                    />
                                                    {touched.paymentId && <ErrorMsg error={errors.paymentId} />}
                                                </div>
                                                <div className="bd-single__form-input  mb-20">
                                                    <input
                                                        type="text"
                                                        placeholder="Phone"
                                                        name="phone"
                                                        value={values.phone}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        id="phone"
                                                        required
                                                    />
                                                    {touched.phone && <ErrorMsg error={errors.phone} />}
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="bd-single__form-input  mb-20">
                                                    <input
                                                        type="text"
                                                        placeholder="Email"
                                                        name="email"
                                                        value={values.email}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        id="email"
                                                        required
                                                    />
                                                    {touched.email && <ErrorMsg error={errors.email} />}
                                                </div>
                                                <div className="bd-single__form-input  mb-20">
                                                    <input
                                                        type="text"
                                                        placeholder="Product Name"
                                                        name="productName"
                                                        value={values.productName}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        id="productName"
                                                    />
                                                    {touched.productName && <ErrorMsg error={errors.productName} />}
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="bd-single__form-input  mb-20">
                                                    <textarea
                                                        value={values.message}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        id="message"
                                                        placeholder="What is Reason For Refund  ...?"
                                                    />
                                                    {touched.message && <ErrorMsg error={errors.message} />}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact-btn">
                                            <button type="submit" className="bd-fill__btn">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RefundForm;
