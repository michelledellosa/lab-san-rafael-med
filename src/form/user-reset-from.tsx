
"use client";
import React, { useState } from "react";

const RestPasswordForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordTwo, setShowPasswordTwo] = useState(false);

    return (
        <>
            <div className="bd-login__area">
                <div className="container small-container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="Login-form-wrapper">
                                <div className="bd-postbox__contact">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="bd-password-box d-flex justify-content-between">
                                                    <input
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="Current Password"
                                                    />
                                                    <span className="input-icon">
                                                        <button
                                                            type="button"
                                                            onClick={() => setShowPassword(!showPassword)}
                                                            className="password-toggle-btn"
                                                        >
                                                            <i
                                                                className={
                                                                    showPassword
                                                                        ? "fas fa-eye"
                                                                        : "fas fa-eye-slash"
                                                                }
                                                            ></i>
                                                        </button>
                                                    </span>

                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="bd-password-box d-flex justify-content-between">
                                                    <input
                                                        type={showPasswordTwo ? "text" : "password"}
                                                        placeholder=" New Password"
                                                    />
                                                    <span className="input-icon">
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                setShowPasswordTwo(!showPasswordTwo)
                                                            }
                                                            className="password-toggle-btn"
                                                        >
                                                            <i
                                                                className={
                                                                    showPasswordTwo
                                                                        ? "fas fa-eye"
                                                                        : "fas fa-eye-slash"
                                                                }
                                                            ></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="bd-sigin__action-button mb-20">
                                                <button className="bd-fill__btn w-100" type="submit">
                                                    Update
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RestPasswordForm;
