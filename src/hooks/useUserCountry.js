// src/hooks/useUserCountry.js
import { useEffect, useState } from "react";

export const useUserCountry = () => {
    const apiPayment = process.env.REACT_APP_API_Payment;
  const [country, setCountry] = useState({ code: "", name: "", id: null });
  useEffect(() => {
    const saved = localStorage.getItem("userCountry");
    
    if (saved) {
      setCountry(JSON.parse(saved));
      return;
    }

    async function fetchCountry() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        //console.log(data.country_code);
        // Optionally: call your backend to get DB country ID
        const dbRes = await fetch(`${apiPayment}/getCountryId?IsoCode=${data.country_code}`);
        const dbCountry = await dbRes.json();

        const info = {
          code: dbCountry[0].isoCode,
          name: dbCountry[0].name,
          id: dbCountry[0].id, // from DB
        };
        localStorage.setItem("userCountry", JSON.stringify(info));
        setCountry(info);
      } catch (err) {
        console.error("Country detection failed:", err);
      }
    }
    fetchCountry();
  }, []);

  return country;
};
