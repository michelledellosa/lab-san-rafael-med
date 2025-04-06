import React from 'react';
//import aboutImg from '../../../public/assets/img/about/01.png';
import aboutImg from "../../../public/assets/img/laboratory/lab-526x509.png";
import Image from 'next/image';
import Link from 'next/link';

const AboutArea = () => {
    return (
        <>
            <div className="about-area about-pb pt-150 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-img pos-rel mb-30">
                                <Image src={aboutImg} style={{ width: "100%", height: "auto" }} priority alt="image not found" />
                                <div className="about-tag">
                                    <h2>15</h2>
                                    <span>Años de <br /> experiencia</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-wrapper pos-rel mb-30">
                                <div className="section-title mb-40">
                                    <h2>Centro Médico Ambulatorio San Rafael</h2>
                                    <p>Para nosotros no hay nada mas importante que tu salud..</p>
                                </div>
                                <div className="about-item">
                                    <ul>
                                        <li>
                                            <div className="about-text">
                                                <h4><i className="far fa-check-circle"></i>Nuestra Misión </h4>
                                                <p>Ofrecer un servicio de Laboratorio Clínico excepcional,  donde nuestros usuarios se sientan 
                                                    satisfechos y plenos por la atención ofrecida en todos nuestros departamentos. Distinguirnos 
                                                    como un laboratorio extraordinario donde la excelencia de nuestros procedimientos y atención 
                                                    nos distinga.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="about-text">
                                                <h4><i className="far fa-check-circle"></i>Vision </h4>
                                                <p>Posicionarnos como un Laboratorio Clínico innovador y de alta calidad, que ofrezca a sus pacientes
                                                     soluciones que permitan el preciso diagnóstico médico y oportuno tratamiento. Queremos ser unas 
                                                     empresa resulterente en el sector salud, que la excelencia sea nuestro estandarte.</p>
                                            </div>
                                        </li>
                                    
                                    </ul>
                                </div>
                                <div className="about-button mt-45">
                                    <Link href="/contact" className="c-btn">Ver Servicios<i className="far fa-plus"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutArea;