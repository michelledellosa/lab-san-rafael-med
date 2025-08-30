"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Icon1 from "../../../public/assets/img/icon/s.png";
import contactImg from "../../../public/assets/img/laboratory/ambulatory-1.png";
import Link from "next/link";
import { getLaboratory } from "@/services/laboratoryService";

const ContactArea = () => {
  const [laboratory, setLaboratory] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function getDataLaboratory() {
      try {
        const labData = await getLaboratory();
        if (labData && labData.length > 0) {
          setLaboratory(labData[0]);
        } else {
          setHasError(true);
        }
      } catch (error) {
        console.error("Error al cargar el laboratorio:", error);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    }

    getDataLaboratory();
  }, []);

  return (
    <div className="contact-area pos-rel pt-100 pb-160">
     {/*} <div className="shape d-none d-xl-block">
        <div className="shape-item con-01">
          <Image
            src={Icon1}
            style={{ width: "100%", height: "auto" }}
            alt="icon"
          />
        </div>
      </div>*/}
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="contact-address-wrapper mt-20 mb-30">
              <div className="section-title mb-30">
                <h2>Contáctanos</h2>
                <p>
                  Puedes comunicarte con nosotros a través de los siguientesss
                  medios:
                </p>
              </div>

              {loading ? (
                <div style={{ fontWeight: "bold" }}>
                  Cargando información...
                </div>
              ) : hasError ? (
                <div style={{ color: "red", fontWeight: "bold" }}>
                  Problema al cargar la página. Inténtalo más tarde.
                </div>
              ) : (
                <>
                  {/* Mostrar logo si está disponible */}
                  {laboratory.lab_logo && (
                    <div style={{ marginBottom: "20px" }}>
                      <Image
                        src={laboratory.lab_logo}
                        width={180}
                        height={80}
                        alt="Logo del laboratorio"
                      />
                    </div>
                  )}

                  <ul className="contact-address-link">
                    <li>
                      <div className="contact-address-icon f-left mr-25">
                        <i className="far fa-map-marked-alt"></i>
                      </div>
                      <div className="contact-address-text">
                        <span>Dirección</span>
                        <h4>{laboratory.lab_address}</h4>
                      </div>
                    </li>
                    <li>
                      <div className="contact-address-icon f-left mr-25">
                        <i className="far fa-phone"></i>
                      </div>
                      <div className="contact-address-text">
                        <span>Teléfono</span>
                        <h4>{laboratory.lab_phone}</h4>
                      </div>
                    </li>
                    <li>
                      <div className="contact-address-icon f-left mr-25">
                        <i className="far fa-envelope-open"></i>
                      </div>
                      <div className="contact-address-text">
                        <span>Email</span>
                        <h4>
                          <Link href={`mailto:${laboratory.lab_email}`}>
                            {laboratory.lab_email}
                          </Link>
                          <br />
                          {laboratory.lab_name}
                        </h4>
                      </div>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>

          <div className="col-xl-8 col-lg-8">
            <div className="contact-img mb-30">
              <Image
                src={contactImg}
                width={600}
                height={400}
                alt="Imagen de contacto"
              
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
