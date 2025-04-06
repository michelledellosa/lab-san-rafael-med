import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import PrivacyPolicy from './PrivacyPolicy';
import TermsCondition from './TermsCondition';
import RefundPolicy from './RefundPolicy';
import RefundForm from '@/form/refund-form';

const RefundPolicyMain = () => {
    return (
        <>
            <Breadcrumb title='Refund Policy' subTitle='Refund Policy' />
            <section className="terms_conditions_section section_space_lg pt-120 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4">
                            <ul
                                className="nav tabs_nav_boxed unordered_list_block mb-60"
                                role="tablist"
                            >
                                <li role="presentation">
                                    <button
                                        data-bs-toggle="tab"
                                        data-bs-target="#tab_privacy_policy"
                                        type="button"
                                        role="tab"
                                        aria-selected={true}
                                    >
                                        <i className="fas fa-circle"></i>
                                        <span>Privacy & Policy</span>
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button
                                        data-bs-toggle="tab"
                                        data-bs-target="#tab_terms_conditions"
                                        type="button"
                                        role="tab"
                                        aria-selected={true}
                                    >
                                        <i className="fas fa-circle"></i>
                                        <span>Terms & Conditions</span>
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button
                                        className="active"
                                        data-bs-toggle="tab"
                                        data-bs-target="#tab_refund_policy"
                                        type="button"
                                        role="tab"
                                        aria-selected={true}
                                    >
                                        <i className="fas fa-circle"></i>
                                        <span>Refund Policy</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <div className="tab-content mb-60">
                                <PrivacyPolicy />
                                <TermsCondition />
                                <RefundPolicy />
                            </div>
                            <RefundForm />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default RefundPolicyMain;