"use client"; // Asegúrate de que este componente sea un Client Component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importar useRouter para redirección

const BlogSidebar = ({
  selectedExams = [], // Valor predeterminado como un arreglo vacío
  exchangeRate,
}: {
  selectedExams?: any[]; // Prop opcional
  exchangeRate: number | null;
}) => {
  const router = useRouter(); // Hook para manejar la navegación

  // Calcular el total de los exámenes seleccionados
  const totalUSD = selectedExams.reduce((total, exam) => {
    const examPrice = Number(exam.exam_price) || 0;
    return total + examPrice;
  }, 0);

  const totalBs = exchangeRate ? totalUSD * exchangeRate : 0;

  // Estado para manejar si el botón está desactivado
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleCreateOrder = () => {
    // Serializar los exámenes seleccionados para pasarlos como parámetro en la URL
    const examsQuery = encodeURIComponent(JSON.stringify(selectedExams));

    // Redirigir a la página de pago con los parámetros
    router.push(`/pay-order?exams=${examsQuery}&totalUSD=${totalUSD.toFixed(2)}&totalBs=${totalBs.toFixed(2)}`);

    setButtonDisabled(true); // Desactivar el botón
  };

  return (
    <div className="col-xl-4 col-lg-4 mb-30">
      <div className="widget mb-30">
        <h3 className="widget-title">Exámenes Seleccionados</h3>
        <ul className="blog-side-list">
          {selectedExams.length > 0 ? (
            selectedExams.map((exam) => (
              <li key={exam.id}>
                <span>
                  {exam.exam_name} - ${exam.exam_price} USD / {exchangeRate ? (exam.exam_price * exchangeRate).toFixed(2) : 'Cargando Bs...'} Bs
                </span>
              </li>
            ))
          ) : (
            <li>No hay exámenes seleccionados.</li>
          )}
        </ul>
        {selectedExams.length > 0 && (
          <div className="total-wrapper">
            <h4>
              Total: 
              <span className="total-usd">${totalUSD.toFixed(2)} USD</span>
              <span className="total-bs">/ {totalBs.toFixed(2)} Bs</span>
            </h4>

            {/* Botón Crear Orden */}
            <div className="button-center">
              <button
                className="button create-order-button"
                style={{ marginTop: '10px' }}
                onClick={handleCreateOrder}
                disabled={isButtonDisabled}
              >
                {isButtonDisabled ? "Orden Creada" : "Crear Orden"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSidebar;
