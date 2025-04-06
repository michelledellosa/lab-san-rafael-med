"use client";
import React, { useEffect, useState } from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ContactArea from './ContactArea';
import ContactMap from './ContactMap';
import ContactFormArea from './ContactFormArea';
import InstragramArea from '../home/InstragramArea';

import { getLaboratory } from '@/services/laboratoryService';

const ContactMainArea = () => {
    const [laboratory, setLaboratory] = useState<any>(null);

    useEffect(() => {
        async function fetchLaboratory() {
            const labData = await getLaboratory();
            setLaboratory(labData);
        }
        fetchLaboratory();
    }, []); // Este efecto se ejecutará solo una vez al montar el componente

    return (
        <>
            <Breadcrumb title='Contáctanos' subTitle='contáctanos' />
            <ContactArea /*laboratory={laboratory}*/ /> {/* Pasamos laboratory como una prop */}
            <ContactMap /*laboratory={laboratory}*/ />
            <ContactFormArea />
            {/*<InstragramArea />*/}
        </>
    );
};

export default ContactMainArea;
