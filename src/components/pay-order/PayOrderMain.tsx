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
    amountPagoMovil: "",
    phoneNumber: "",
    amountPunto: "",
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
    console.log("📦 Detalles del Pago:");
    console.log(paymentDetails);

    console.log("🧪 Exámenes Seleccionados:");
    console.log(selectedExams);

    console.log("💱 Tasa de cambio actual (USD → Bs):", exchangeRate);

    const totalUSD = selectedExams.reduce(
      (total, exam) => total + Number(exam.exam_price || 0),
      0
    );
    const totalBs = exchangeRate ? totalUSD * exchangeRate : 0;

    console.log(
      `💵 Total a pagar: $${totalUSD.toFixed(2)} USD / Bs ${totalBs.toFixed(2)}`
    );
  };

  return (
    <>
      <Breadcrumb title="Servicios" subTitle="Servicios" />
      <div className="blog-area pt-105 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
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

            <div className="col-12 mb-4">
              <div className="card payment-card text-center">
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
            </div>

            <div className="col-12">
              <div className="d-flex flex-wrap gap-3 justify-content-between">
                <div className="card payment-card shadow">
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
                  <div className="form-group">
                    <label>Monto</label>
                    <input
                      type="number"
                      step="0.01"
                      name="amountPagoMovil"
                      value={paymentDetails.amountPagoMovil}
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

                <div className="card payment-card shadow">
                  <h4>Pago por Punto</h4>
                  <div className="form-group">
                    <label>Monto</label>
                    <input
                      type="number"
                      step="0.01"
                      name="amountPunto"
                      value={paymentDetails.amountPunto}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="card payment-card shadow">
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

              <div className="d-flex flex-wrap justify-content-between gap-2 mt-4">
                <button
                  onClick={handleGoBack}
                  className="button2 equal-button back-button2"
                  style={{ flex: "1 1 45%", minWidth: "140px" }}
                >
                  Regresar
                </button>
                <button
                  onClick={handleProcessPayment}
                  disabled={!isPaymentReady}
                  className="button2 equal-button process-payment-button2"
                  style={{
                    flex: "1 1 45%",
                    minWidth: "140px",
                    opacity: isPaymentReady ? 1 : 0.5,
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
