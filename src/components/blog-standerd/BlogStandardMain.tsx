"use client";

import React, { useEffect, useState } from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogSidebar from "../blog-grid-sidebar/BlogSidebar";
import PaginationData from "../common/pagination/pagination-data";
import { fetchExams } from "@/services/examsService"; 
import { getExchangeRate } from "@/services/exchangeService";

const BlogStandardMain = () => {
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [selectedExams, setSelectedExams] = useState<any[]>([]); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [examsData, setExamsData] = useState<any[]>([]); 

  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 
 
  const examsPerPage = 8; 

  useEffect(() => {
    const loadExams = async () => {
      try {
        setLoading(true);
        const data = await fetchExams();
        setExamsData(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching exams:", err);
        setError("No se pudieron cargar los exámenes.");
      } finally {
        setLoading(false);
      }
    };
    loadExams();
  }, []);

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

  const handleClick = (exam: any) => {
    if (selectedExams.some((e) => e.exam_id === exam.exam_id)) {
      setSelectedExams(selectedExams.filter((e) => e.exam_id !== exam.exam_id));
    } else {
      setSelectedExams([...selectedExams, exam]);
    }
  };

  const totalPages = Math.ceil(examsData.length / examsPerPage);

  const currentExams = examsData.slice(
    (currentPage - 1) * examsPerPage,
    currentPage * examsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Breadcrumb title="Servicios" subTitle="Servicios" />
      <div className="blog-area pt-105 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 mb-30">
              <div className="widget widget-2 mb-30">
                <form className="search-form">
                  <input type="text" placeholder="Buscar examen..." />
                  <button type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="blog-standard">
                {currentExams.map((item: any) => (
                  <div className="blog-wrapper mb-40" key={item.exam_id}>
                    <div className="blog-text">
                      <h4>{item.exam_name}</h4>
                      <p>{item.exam_description}</p>
                      <p>
                        Precio: <strong>${item.exam_price} USD</strong>
                        {exchangeRate ? (
                          <span>
                            {" "}
                            /{" "}
                            <strong>
                              {(item.exam_price * exchangeRate).toFixed(2)} Bs
                            </strong>
                          </span>
                        ) : (
                          <span> / Cargando Bs...</span>
                        )}
                      </p>

                      <div className="button-wrapper">
                        <button
                          className={`button ${
                            selectedExams.some((e) => e.exam_id === item.exam_id)
                              ? "selected"
                              : ""
                          }`}
                          style={{
                            backgroundColor: selectedExams.some(
                              (e) => e.exam_id === item.exam_id
                            )
                              ? "#C21111"
                              : "#5094fc",
                          }}
                          onClick={() => handleClick(item)}
                        >
                          {selectedExams.some((e) => e.exam_id === item.exam_id)
                            ? "Remover"
                            : "Solicitar"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="basic-pagination basic-pagination-2">
                    <PaginationData
                      totalPages={totalPages}
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <BlogSidebar selectedExams={selectedExams} exchangeRate={exchangeRate} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogStandardMain;
