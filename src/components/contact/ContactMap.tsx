"use client";
import React, { useEffect, useState } from 'react';
import { getLaboratory } from '@/services/laboratoryService';

const ContactMap = ({laboratory}:any) => {

    /*  const [laboratory, setLaboratory] = useState<any>(null);
/*
  useEffect(() => {
    async function getLaboratory() {
      const labData = await getLaboratory();
      setLaboratory(labData);
    }
    getLaboratory();
  }, []);*/

    return (
        <>
        {laboratory!=null ?(
                <div className="map-area">
                <div className="map-wrapper">
                    {/* Utiliza las coordenadas recibidas como props */}
                    <iframe
                        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.254272231177!2d${laboratory.longitude}!3d${laboratory.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1592201299593!5m2!1sen!2sbd`}
                        aria-hidden="false" tabIndex={0}></iframe>
                </div>
            </div>
        ):null}
          
        </>
    );
};

export default ContactMap;