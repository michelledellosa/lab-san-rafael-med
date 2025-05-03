"use client";
import React from 'react';

interface Props {
  laboratory: any;
}

const ContactMap = ({ laboratory }: Props) => {
  if (!laboratory) return null;

  // Coordenadas fijas del laboratorio
  const latitude = 8.2314923;
  const longitude = -62.8243334;

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.254272231177!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sbr!4v1713217777777!5m2!1ses-419!2sbr`;

  return (
    <div
      className="map-area"
      style={{
        marginBottom: "60px",       // separación del formulario
        position: "relative",        // normal positioning
        zIndex: 0                    // asegura que esté detrás de todo
      }}
    >
      <div
        className="map-wrapper"
        style={{
          width: "100%",
          height: "400px",
          overflow: "hidden",         // evita que sobresalga
          border: "1px solid #ccc",   // opcional, para visualización
        }}
      >
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{
            border: 0,
            position: "relative",     // IMPORTANTE: no usar absolute
            zIndex: 0,
            display: "block"
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación del laboratorio"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
