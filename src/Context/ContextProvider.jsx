import { useEffect, useState } from "react";
import { CompaniesContext } from "./MixContext";

const ContextProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const url = `https://aspinchakma.github.io/api-for-practice/jobs.json`;
      const response = await fetch(url);
      const result = await response.json();
      setCompanies(result);
    };
    loadData();
  }, []);

  return (
    <CompaniesContext.Provider value={companies}>
      {children}
    </CompaniesContext.Provider>
  );
};

export default ContextProvider;
