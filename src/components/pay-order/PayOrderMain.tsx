/* PayOrderMain.tsx */

"use client";
import "./PayOrderMain.css";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import { getExchangeRate } from "@/services/exchangeService";

const PayOrderMain = ({
  selectedExams: initialSelectedExams = [],
}: {
  selectedExams?: any[];
}) => {
  const router = useRouter();
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [selectedExams, setSelectedExams] =
    useState<any[]>(initialSelectedExams);
  const [paymentDetails, setPaymentDetails] = useState({
    referenceNumber: "",
    paymentImage: null,
    amount: "",
    phoneNumber: "",
    exchangeAmount: "",
  });
  const [isPaymentReady, setIsPaymentReady] = useState(false);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const rate = await getExchangeRate();
        setExchangeRate(rate);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };
    fetchExchangeRate();
  }, []);

  useEffect(() => {
    const hasPagoMovil =
      paymentDetails.referenceNumber &&
      paymentDetails.amountPagoMovil &&
      paymentDetails.phoneNumber.length >= 11;

    const hasPagoPunto = paymentDetails.amountPunto;
    const hasDivisas = paymentDetails.exchangeAmount;
    setIsPaymentReady(!!(hasPagoMovil || hasPagoPunto || hasDivisas));
  }, [paymentDetails]);

  const totalUSD = selectedExams.reduce(
    (total, exam) => total + Number(exam.exam_price || 0),
    0
  );
  const totalBs = exchangeRate ? totalUSD * exchangeRate : 0;

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/[^0-9.]/g, "");
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: numericValue,
    }));
  };

  const handleGoBack = () => {
    const examsQuery = encodeURIComponent(JSON.stringify(selectedExams));
    router.push(`/services?exams=${examsQuery}`);
  };

  const handleProcessPayment = () => {
    // Aquí puedes añadir la lógica para procesar el pago
    console.log("Procesando pago con detalles:", paymentDetails);
  };

  return (
    <>
      <Breadcrumb title="Servicios" subTitle="Servicios" />
      <div className="blog-area pt-105 pb-70">
        <div className="container">
          {/* ROW PRINCIPAL */}
          <div className="row">
            <div className="col-xl-8 col-lg-8 mb-30">
              <h3>Exámenes Seleccionados</h3>
              {selectedExams.length > 0 ? (
                selectedExams.map((exam) => (
                  <div
                    className="selected-exam mb-20 d-flex justify-content-between align-items-center"
                    key={exam.id}
                  >
                    <div>
                      <h4>{exam.exam_name}</h4>
                      <p>
                        Precio: <strong>${exam.exam_price} USD</strong> /{" "}
                        <strong>
                          {exchangeRate
                            ? (exam.exam_price * exchangeRate).toFixed(2)
                            : "Cargando Bs..."}
                        </strong>{" "}
                        Bs
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setSelectedExams(
                          selectedExams.filter((e) => e.id !== exam.id)
                        )
                      }
                      className="button remove-button"
                      style={{ fontSize: "20px" }}
                    >
                      -
                    </button>
                  </div>
                ))
              ) : (
                <p>No hay exámenes seleccionados.</p>
              )}
            </div>

            {/* Tarjetas de opciones de pago */}
            <div className="col-xl-4 col-lg-4 mb-30">
              <div
                className="card total-wrapper"
                style={{
                  padding: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  borderRadius: "8px",
                }}
              >
                <h4>Total:</h4>
                <p className="mb-1">
                  <span
                    className="total-usd"
                    style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                  >
                    ${totalUSD.toFixed(2)} USD
                  </span>
                </p>
                <p className="mb-0">
                  <span className="total-bs" style={{ fontSize: "1.2rem" }}>
                    {totalBs.toFixed(2)} Bs
                  </span>
                </p>
              </div>

              {/* Opción Pago Móvil */}
              <div
                className="card payment-option"
                style={{
                  marginTop: "20px",
                  padding: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  borderRadius: "8px",
                }}
              >
                <h4>Pago Móvil</h4>
                <div className="form-group">
                  <label>Nro de Referencia</label>
                  <input
                    type="number"
                    name="referenceNumber"
                    value={paymentDetails.referenceNumber}
                    onChange={handleInputChange}
                  />
                </div>
                {/*<div className="form-group">
                  <label>Imagen del Pago</label>
                  <input type="file" onChange={handleFileChange} />
                </div>*/}
                <div className="form-group">
                  <label>Monto</label>
                  <input
                    type="number"
                    step="0.01"
                    name="amount"
                    value={paymentDetails.amount}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Nro de Teléfono</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={paymentDetails.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Opción Pago por Punto */}
              <div
                className="card payment-option"
                style={{
                  marginTop: "20px",
                  padding: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  borderRadius: "8px",
                }}
              >
                <h4>Pago por Punto</h4>
                <div className="form-group">
                  <label>Monto</label>
                  <input
                    type="number"
                    step="0.01"
                    name="amount"
                    value={paymentDetails.amount}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Opción Pago en Divisas */}
              <div
                className="card payment-option"
                style={{
                  marginTop: "20px",
                  padding: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  borderRadius: "8px",
                }}
              >
                <h4>Pago en Divisas</h4>
                <div className="form-group">
                  <label>Cantidad en $</label>
                  <input
                    type="number"
                    step="0.01"
                    name="exchangeAmount"
                    value={paymentDetails.exchangeAmount}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Botones al final */}
          <div className="row">
            <div className="col-12">
              <div className="button-wrapper2 d-flex justify-content-center mt-4 flex-wrap gap-3">
                <button
                  onClick={handleGoBack}
                  className="button2 equal-button back-button2"
                >
                  Regresar
                </button>
                <button
                  onClick={handleProcessPayment}
                  className="button2 equal-button process-payment-button2"
                  disabled={!isAnyPaymentMethodValid}
                  style={{
                    opacity: !isAnyPaymentMethodValid ? 0.6 : 1,
                    cursor: !isAnyPaymentMethodValid
                      ? "not-allowed"
                      : "pointer",
                  }}
                >
                  Procesar Pago
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayOrderMain;
