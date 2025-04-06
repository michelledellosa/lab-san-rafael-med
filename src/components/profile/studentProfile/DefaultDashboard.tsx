"use client";
import ShopModal from "@/components/common/modal/ShopModal";
import orders_data from "@/data/orders-data"; 
import Link from "next/link";
import React, { useState } from "react";
import "./DashboardStyles.css";  // Importa el archivo CSS

const DefaultDashboard = () => {
  const [orderType, setOrderType] = useState("all");

  const filterOrders = (type:any) => {
    switch (type) {
      case "pending":
        return orders_data.filter((order) => order.states_name === "PENDIENTE");
      case "paid":
        return orders_data.filter((order) => order.states_name === "PAGADO");
      case "completed":
        return orders_data.filter((order) => order.states_name === "COMPLETADO");
      case "cancelled":
        return orders_data.filter((order) => order.states_name === "CANCELADO");
      default:
        return orders_data;
    }
  };

  const ordersToDisplay = filterOrders(orderType);

  return (
    <>
      <div className="bd-trending__item-wrapper">
        {/* Botones para alternar entre los diferentes tipos de órdenes */}
        <div className="order-filter-buttons text-center mb-30">
          <button className="all" onClick={() => setOrderType("all")}>Todas las órdenes</button>
          <button className="pending" onClick={() => setOrderType("pending")}>Órdenes Pendientes</button>
          <button className="paid" onClick={() => setOrderType("paid")}>Órdenes Pagadas</button>
          <button className="completed" onClick={() => setOrderType("completed")}>Órdenes Finalizadas</button>
          <button className="cancelled" onClick={() => setOrderType("cancelled")}>Órdenes Canceladas</button>
        </div>
        <div className="widget widget-2 mb-30">
                <form className="search-form">
                  <input type="text" placeholder="Buscar orden..." />
                  <button type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>

        {/* Mostrar las órdenes filtradas */}
        <div className="row">
          {ordersToDisplay.length === 0 ? (
            <p>No hay órdenes disponibles.</p>
          ) : (
            ordersToDisplay.map((order) => (
              <div
                className="col-xl-4 cl-lg-4 col-md-6 mb-4"
                key={order.exam_order_id}
              >
                <div className="card">
                  <div className="product-text">
                    <h5>{order.exam_name}</h5>
                    <span>${order.exam_price}</span>
                    <p>Estado: {order.states_name}</p>
                    <p>Cliente: {order.users_firstname} {order.users_lastname}</p>
                    <Link href={`/order-details/${order.exam_order_id}`}>
                      <button className="view-button">Ver</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <ShopModal />
    </>
  );
};

export default DefaultDashboard;
