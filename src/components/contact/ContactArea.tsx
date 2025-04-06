"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Icon1 from "../../../public/assets/img/icon/s.png";
//import contactImg from "../../../public/assets/img/bg/contact.jpg";
import contactImg from "../../../public/assets/img/laboratory/ambulatory-1.png";
import Link from "next/link";
import { getLaboratory } from "@/services/laboratoryService";
//import { useClient } from 'next/client';

const ContactArea = (/*{laboratory}:any*/) => {
  const laboratory = {
    address:'Ciudad Guayana 8050, Bolívar. Core 8',
    phone:'0286-9530505',
    email:'labsanrafael@gmail.com',
    name:'Laboratorio Clinico San Rafael'
  }
  /*const [laboratory, setLaboratory] = useState<any>(null);

  useEffect(() => {
    async function getDataLaboratory() {
      const labData = await getLaboratory();
      setLaboratory(labData);
    }
    getDataLaboratory();
  }, []);*/

  return (
    <>
      <div className="contact-area pos-rel pt-100 pb-160">
        <div className="shape d-none d-xl-block">
          <div className="shape-item con-01">
            <Image
              src={Icon1}
              style={{ width: "100%", height: "auto" }}
              alt="image not found"
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="contact-address-wrapper mt-20 mb-30">
                <div className="section-title mb-30">
                  <h2>Contáctanos</h2>
                  <p>
                    Puedes comunicarte con nostros a traves de los siguientes medios:
                  </p>
                </div>

                {laboratory != null /*&& laboratory.length>0 */ ? (
                  <>
                    {/*<p>hola</p>*/}

                    <ul className="contact-address-link">
                      <li>
                        <div className="contact-address-icon f-left mr-25">
                          <i className="far fa-map-marked-alt"></i>
                        </div>
                        <div className="contact-address-text">
                          <span>Dirección</span>
                          <h4>{laboratory.address}</h4>
                        </div>
                      </li>
                      <li>
                        <div className="contact-address-icon f-left mr-25">
                          <i className="far fa-phone"></i>
                        </div>
                        <div className="contact-address-text">
                          <span>Teléfono</span>
                          <h4>{laboratory.phone}</h4>
                        </div>
                      </li>
                      <li>
                        <div className="contact-address-icon f-left mr-25">
                          <i className="far fa-envelope-open"></i>
                        </div>
                        <div className="contact-address-text">
                          <span>Email</span>
                          <h4>
                            <Link
                              href="mailto: `$`"
                              target="_blank"
                            >
                              {laboratory.email}
                            </Link>
                            <br /> {laboratory.name}
                          </h4>
                        </div>
                      </li>
                    </ul>
                  </>
                ) : (
                  <div>
                    <span>Not Information</span>
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="contact-img mb-30">
                <Image
                  src={contactImg}
                  style={{ width: "75%", height: "auto" }}
                  alt="image not found"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
