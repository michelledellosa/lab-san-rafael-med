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
    amountMovil: "",
    amountPunto: "",
    exchangeAmount: "",
  });

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

  const totalUSD = selectedExams.reduce(
    (total, exam) => total + Number(exam.exam_price || 0),
    0
  );
  const totalBs = exchangeRate ? totalUSD * exchangeRate : 0;

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFileChange = (e: any) => {
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      paymentImage: e.target.files[0],
    }));
  };

  const handleGoBack = () => {
    const examsQuery = encodeURIComponent(JSON.stringify(selectedExams));
    router.push(`/services?exams=${examsQuery}`);
  };

  const handleProcessPayment = async () => {
    console.log("Procesando pago con detalles:", paymentDetails);
    console.log("Exámenes seleccionados:", selectedExams);

    const examsPayload = selectedExams.map((exam) => ({
      id: String(exam.exam_id),
    }));

    const paymentPayload: any = {
      total: Number((exchangeRate ? totalUSD * exchangeRate : totalUSD).toFixed(2)),
    };
    
    if (paymentDetails.amountMovil) {
      paymentPayload.depositBs = Number(paymentDetails.amountMovil);
      paymentPayload.depositRef = Number(paymentDetails.referenceNumber);
    } else if (paymentDetails.amountPunto) {
      paymentPayload.depositBs = Number(paymentDetails.amountPunto);
    }
    
    if (paymentDetails.exchangeAmount) {
      paymentPayload.dolar = Number(paymentDetails.exchangeAmount);
    }
    


    const payload = {
      idCustomer: 1,
      exams: examsPayload,
      payment: paymentPayload,
    };

    console.log("Enviando payload:", payload);

    try {
      const response = await fetch("https://lab-san-rafael-api.onrender.com/orders/new/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Respuesta del servidor:", data);
      alert("¡Pago procesado con éxito!");
    } catch (error) {
      console.error("Error al procesar el pago:", error);
      alert("Ocurrió un error al procesar el pago.");
    }
  };

  // ✅ Validaciones actualizadas
  const isPagoMovilFilled =
    paymentDetails.referenceNumber || paymentDetails.amountMovil;

  const isPagoMovilComplete =
    paymentDetails.referenceNumber && paymentDetails.amountMovil;

  const isPagoPuntoFilled = paymentDetails.amountPunto && !isPagoMovilFilled;
  const isPagoDivisasFilled = paymentDetails.exchangeAmount;

  const isAnyPaymentMethodValid =
    (isPagoMovilFilled && isPagoMovilComplete) ||
    isPagoPuntoFilled ||
    isPagoDivisasFilled;

  return (
    <>
      <Breadcrumb title="Servicios" subTitle="Servicios" />
      <div className="blog-area pt-105 pb-70">
        <div className="container">
          {/* ROW PRINCIPAL */}
          <div className="row">
            {/* Columna izquierda - Exámenes */}
            <div className="col-lg-8 col-12">
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

            {/* Columna derecha - Total */}
            <div className="col-lg-4 col-12 mt-4 mt-lg-0">
              <div
                className="card total-wrapper"
                style={{
                  padding: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  borderRadius: "8px",
                }}
              >
                <h4>Total:</h4>
                <p>
                  <span className="total-usd">${totalUSD.toFixed(2)} USD</span>{" "}
                  / <span className="total-bs">{totalBs.toFixed(2)} Bs</span>
                </p>
              </div>
            </div>
          </div>

          {/* ROW APARTE – Métodos de Pago (100% ancho) */}
          <div className="row mt-4">
            {/* Pago Móvil */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card payment-option h-100 p-4">
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
                    name="amountMovil"
                    value={paymentDetails.amountMovil}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Pago por Punto */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card payment-option h-100 p-4">
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
            </div>

            {/* Pago en Divisas */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card payment-option h-100 p-4">
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
