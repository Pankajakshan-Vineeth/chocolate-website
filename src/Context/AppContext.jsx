// src/Context/AppContext.jsx
import React, { createContext, useState, useEffect } from "react";
import pan_India from "../assets/panIndia"; 

export const AppContext = createContext(null);

export default function AppContextProvider({ children }) {
  //
  // 1) Hero slider state
  //
  const heroData = [
    { text1: "Real Fruit", text2: "Macarons" },
    { text1: "Almond +",  text2: "Chocolates" },
    { text1: "Celebrate with", text2: "real", text3: "cakes" },
    { text1: "Breakfast",  text2: "in Bed???" },
  ];
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => (c + 1) % heroData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroData.length]);

  
  // 2) PanIndia carousel state
  
  const PAGE_SIZE = 4;
  const pageCount = Math.ceil(pan_India.length / PAGE_SIZE);
  const [page, setPage] = useState(0);
  const start    = page * PAGE_SIZE;
  const visible  = pan_India.slice(start, start + PAGE_SIZE);
  const prev     = () => setPage(p => (p === 0 ? pageCount - 1 : p - 1));
  const next     = () => setPage(p => (p === pageCount - 1 ? 0 : p + 1));

  
  // 3) Expose everything in contextValue
  
  const contextValue = {
    // Hero slider
    heroData,
    count,
    setCount,

    // PanIndia carousel
    panIndiaAll: pan_India,
    visiblePanIndia: visible,
    page,
    pageCount,
    prevPanIndia: prev,
    nextPanIndia: next,
    goToPanIndiaPage: setPage,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}
