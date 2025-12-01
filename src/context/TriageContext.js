// src/context/TriageContext.js
import React, { createContext, useState, useEffect } from 'react';

export const TriageContext = createContext();

export const TriageProvider = ({ children }) => {
  const [triageSections, setTriageSections] = useState([]);

  // Load from localStorage if already available
  useEffect(() => {
    const stored = localStorage.getItem('triageSections');
    if (stored) {
      setTriageSections(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage if updated
  useEffect(() => {
    if (triageSections.length > 0) {
      localStorage.setItem('triageSections', JSON.stringify(triageSections));
    }
  }, [triageSections]);

  const value = {
    triageSections,
    setTriageSections, // allow updates
    getByApp: (appName) =>
      triageSections.filter((item) => item.application === appName),
  };

  return (
    <TriageContext.Provider value={value}>
      {children}
    </TriageContext.Provider>
  );
};
