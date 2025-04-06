import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div
            className="tab-pane fade"
            id="tab_privacy_policy"
            role="tabpanel"
        >
            <div className="terms_conditions_content">
                <h3 className="warpper_title">Privacy Policy Agreement</h3>
                <p>
                    Companies or websites that handle customer information are
                    required by law and third parties to publish their Privacy
                    Policies on their business websites. If you own a website,
                    web app, mobile app or that collects or processes user
                    data, you most certainly will have to post a Privacy
                    Policy on your website (or give in-app access to the full
                    Privacy Policy agreement).
                </p>
                <h4 className="info_title">
                    Here are some of the main reasons:
                </h4>
                <ul className="icon_list unordered_list_block">
                    <li>
                        <span className="list_item_text">
                            <strong>1. Responsive Design</strong>: Ensures a
                            seamless experience across various devices.
                        </span>
                    </li>
                    <li>
                        <span className="list_item_text">
                            <strong>3. Medibazer Template</strong>: Medibazar - Medical Equipment Store eCommerce React, Naxt Js Template.
                        </span>
                    </li>
                    <li>
                        <span className="list_item_text">
                            <strong>5. Modern Technologies</strong>: Benefits of
                            React, Next.js, and TypeScript..
                        </span>
                    </li>
                    <li>
                        <span className="list_item_text">
                            {`Let's`} take a look at each of these reasons in more
                            depth.
                        </span>
                    </li>
                </ul>

                <h4 className="info_title">What we collect</h4>
                <p>
                    As a provider of the Medibazar- Medical Equipment Store eCommerce Template you may collect and{" "}
                    <Link className="link" href="/faq">
                        Google require website
                    </Link>{" "}
                    certain information from users who interact with your
                    platform. The specific types of information you collect
                    can vary based on the features and functionalities of your
                    template. However, here are some common types of
                    information that might be collected:
                </p>
                <p>
                    Some of the most popular third party services require
                    website and app owners to post Privacy Policy agreements
                    on their websites. Some of these services include:
                </p>

                <h4 className="info_title">
                    Questions, comments, or report of incidents
                </h4>
                <p className="mb-1">
                    You may direct questions, comments or reports to:
                </p>
                <p>
                    <Link
                        className="author_mail"
                        href="mailto:howdy@medibazar.com"
                    >
                        howdy@medibazar.com
                    </Link>
                </p>
                <h4 className="info_title">
                    Revisions to this privacy policy without notice
                </h4>
                <p className="mb-0">
                    This Privacy Policy is dynamic. It will continually
                    change. You may not assume that it remains the same and
                    you agree to check the policy each time you visit the site
                    for changes. Unless, in the sole opinion of the website,
                    this policy changes so drastically as to suggest a posted
                    notification on the site or via email, you will receive no
                    notification of changes to this Privacy Policy nor, under
                    any circumstances, does this site promise notification.
                    Your continued use of this site always evidences your
                    acceptance of the terms this Privacy Policy or any
                    modifications.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;