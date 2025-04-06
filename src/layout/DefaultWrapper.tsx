//@refresh
"use client";
import React, { useEffect } from "react";
import { animationCreate } from "@/utils/utils";
import BacktoTop from "@/components/common/backToTop/BacktoTop";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { usePathname } from "next/navigation";
import FooterOne from "./footer/FooterOne";
import HeaderOne from "./header/HeaderOne";
import HeaderTwo from "./header/HeaderTwo";
import HeaderThree from "./header/HeaderThree";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const pathName = usePathname();
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 200);
  }, []);

  return (
    <>
      <BacktoTop />
      {(() => {
        switch (pathName) {
          case "/home-2":
            return <HeaderTwo />;
          case "/home-3":
            return <HeaderThree />;
          default:
            return <HeaderOne />
        }
      })()}
      {children}
      {(() => {
        switch (pathName) {
          default:
            return <FooterOne />;
        }
      })()}
    </>
  );
};

export default Wrapper;
