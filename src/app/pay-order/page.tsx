"use client"; // Añadir esta directiva para convertir el archivo en un Client Component

import React from 'react';
import { useSearchParams } from 'next/navigation'; // Usar useSearchParams
import PayOrderMain from '@/components/pay-order/PayOrderMain'; 
import Wrapper from '@/layout/DefaultWrapper';

const Page = () => {
  const searchParams = useSearchParams();

  // Obtener los parámetros de búsqueda desde la URL
  const exams = searchParams.get('exams');
  const totalUSD = searchParams.get('totalUSD');
  const totalBs = searchParams.get('totalBs');

  // Decodificar los exámenes
  const parsedExams = exams ? JSON.parse(exams) : [];

  return (
    <Wrapper>
      <main>
        <PayOrderMain 
          selectedExams={parsedExams} 
          //totalUSD={totalUSD ? Number(totalUSD) : 0} 
        //  totalBs={totalBs ? Number(totalBs) : 0} 
        />
      </main>
    </Wrapper>
  );
};

export default Page;
