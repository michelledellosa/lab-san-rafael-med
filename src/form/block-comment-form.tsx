"use client"
import { blogSchema } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import ErrorMsgTwo from './error-msg-two';

const BlogCommentForm = () => {
    const { handleSubmit, handleBlur, handleChange, values, errors, touched } = useFormik({
        initialValues: {
            name: "",
            email: "",
            comment: "",
        },
        validationSchema: blogSchema,
        onSubmit: (values, { resetForm }) => {
            toast.success("Comment Successfully")
            resetForm()
        }
    })
    return (
        <>
            <form className="conatct-post-form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="contact-icon contacts-name">
                            <input
                                type="text"
                                name='name'
                                value={values.name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                required
                                placeholder="Your Name"
                            />
                        </div>
                        {touched.name && <ErrorMsgTwo error={errors.name} />}
                    </div>
                    <div className="col-xl-12">
                        <div className="contact-icon contacts-email">
                            <input type="email"
                                name='email'
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                required
                                placeholder="Your Email" />
                        </div>
                        {touched.email && <ErrorMsgTwo error={errors.email} />}
                    </div>
                    <div className="col-xl-12">
                        <div className="contact-icon contacts-message">
                            <textarea name="comment"
                                value={values.comment}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                required
                                cols={30} rows={10}
                                placeholder="Your Comments"
                            ></textarea>
                            {touched.comment && <ErrorMsgTwo error={errors.comment} />}
                        </div>

                    </div>
                    <div className="col-xl-12">
                        <button className="c-btn" type="submit"> <span> </span> Post comment <span> </span></button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default BlogCommentForm;