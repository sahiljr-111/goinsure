import { createContext, useEffect } from "react";
import { useState } from "react";

export const ModelName = createContext();

const ModelNameContext = ({ children }) => {

  const [modelName, setModelName] = useState("");
  return (
    <ModelName.Provider value={{ modelName, setModelName }}>
      {children}
    </ModelName.Provider>
  );
};

export default ModelNameContext;
