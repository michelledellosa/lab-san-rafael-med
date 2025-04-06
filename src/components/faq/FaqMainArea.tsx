import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import InstragramArea from '../home/InstragramArea';

const FaqMainArea = () => {
    return (
        <>
            <Breadcrumb title='Faq' subTitle='Faq' />
            <section className="bd-faq-area pt-120 pb-95">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="bd-section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-duration="1s"
                                data-wow-delay=".3s">
                                <h1 className="bd-section-title mb-4">Freequently Asked Questions</h1>
                                <p>View classes by age, program, or subject. Check out upcoming camps and<br /> special events too!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="bd-faq-content bd-faq-content-4 mb-25 wow fadeInLeft" data-wow-duration="1s"
                                data-wow-delay=".3s">
                                <div className="bd-faq">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    What is a medical bazaar?
                                                </button>
                                            </h4>
                                            <div id="collapseOne" className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>A medical bazaar is a marketplace where individuals, healthcare professionals, or organizations can buy and sell medical equipment, devices, and supplies.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Is it safe to buy medical equipment?
                                                </button>
                                            </h4>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Ensure the platform has proper security measures in place. Check user reviews, seller ratings, and verify the authenticity of the listings. Be cautious of potential scams and only use trusted platforms.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Can I sell my used medical equipment?
                                                </button>
                                            </h4>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Many platforms allow individuals and organizations to sell used or new medical equipment. Follow the {`platform's`} guidelines for listing items and provide accurate information about the condition and specifications.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                                    What types of medical equipment are available?
                                                </button>
                                            </h4>
                                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Medical bazaars may feature a wide range of equipment, including diagnostic tools, treatment devices, surgical instruments, and more. Specific listings will depend on the sellers and the platform.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="bd-faq-content bd-faq-content-4 mb-25 wow fadeInRight" data-wow-duration="1s"
                                data-wow-delay=".3s">
                                <div className="bd-faq">
                                    <div className="accordion" id="accordionExample2">
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="faqHeadingTwoo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#faqCollapseOne" aria-expanded="false"
                                                    aria-controls="faqCollapseOne">
                                                    How do I know if the equipment is good?
                                                </button>
                                            </h4>
                                            <div id="faqCollapseOne" className="accordion-collapse collapse"
                                                aria-labelledby="faqHeadingTwoo" data-bs-parent="#accordionExample2">
                                                <div className="accordion-body">
                                                    <p>Ask the seller for detailed information about the {`equipment's`} condition, maintenance history, and any necessary certifications. Request photos and, if possible, inspect the equipment before finalizing the purchase.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="faqHeadingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#faqCollapseTwo" aria-expanded="false"
                                                    aria-controls="faqCollapseTwo">
                                                    Are there other rules for selling equipment?
                                                </button>
                                            </h4>
                                            <div id="faqCollapseTwo" className="accordion-collapse collapse"
                                                aria-labelledby="faqHeadingTwo" data-bs-parent="#accordionExample2">
                                                <div className="accordion-body">
                                                    <p>Sellers should comply with relevant regulations and guidelines for selling medical equipment. This may include obtaining proper certifications, providing accurate information, and adhering to ethical and legal standards.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="faqHeadingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#faqCollapseThree" aria-expanded="false"
                                                    aria-controls="faqCollapseThree">
                                                    Can I medical equipment be returned or exchanged?
                                                </button>
                                            </h4>
                                            <div id="faqCollapseThree" className="accordion-collapse collapse"
                                                aria-labelledby="faqHeadingThree" data-bs-parent="#accordionExample2">
                                                <div className="accordion-body">
                                                    <p>Review the {`platform's`} return and exchange policies. Some platforms may have specific guidelines for returning or exchanging medical equipment based on the condition and reason for return.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="faqHeadingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#faqCollapseFour" aria-expanded="false"
                                                    aria-controls="faqCollapseFour">
                                                    How do I contact customer support on the medical bazaar?
                                                </button>
                                            </h4>
                                            <div id="faqCollapseFour" className="accordion-collapse collapse"
                                                aria-labelledby="faqHeadingFour" data-bs-parent="#accordionExample2">
                                                <div className="accordion-body">
                                                    <p>Find and follow the {`platform's`} customer support channels for any inquiries, issues, or assistance. This may include email, live chat, or a dedicated customer service hotline.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <InstragramArea />
        </>
    );
};

export default FaqMainArea;