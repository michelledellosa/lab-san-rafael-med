import { review_schema } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import ErrorMsg from './error-msg';

const ReviewForm = () => {
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                name: "",
                email: "",
                massage: "",
            },
            validationSchema: review_schema,
            onSubmit: (values, { resetForm }) => {
                toast.success("Review Successful")
                resetForm();
            },
        });
    return (
        <form onSubmit={handleSubmit} className="review-form">
            <div className="row">
                <div className="col-xl-6">
                    <div className='review-name'>
                        <div className='review-field'>
                            <input
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                id="name"
                                placeholder="Name"
                                required
                            />
                            {touched.name && <ErrorMsg error={errors.name} />}
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 mb-3">
                    <div className='review-email'>
                        <div className="review-field">
                            <input
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="email"
                                id="email"
                                placeholder="Email"
                                required
                            />
                            {touched.email && <ErrorMsg error={errors.email} />}
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className='review-massage'>
                        <div className='review-field'>
                            <textarea cols={30} rows={10}
                                name="massage"
                                value={values.massage}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="massage"
                                placeholder="Write your Review :"
                            ></textarea>
                            {touched.massage && <ErrorMsg error={errors.massage} />}
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <button className="c-btn">Add your Review
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ReviewForm;