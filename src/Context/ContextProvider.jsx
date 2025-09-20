import { CompaniesContext } from "./MixContext";

const ContextProvider = ({ children }) => {
  const name = "Aspin Chakma";

  return (
    <CompaniesContext.Provider value={name}>
      {children}
    </CompaniesContext.Provider>
  );
};

export default ContextProvider;
