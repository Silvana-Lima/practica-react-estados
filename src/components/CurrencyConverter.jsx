import { useState } from "react";

export const CurrencyConverter = () => {
  const [valuePesoArg, setValuePesoArg] = useState(0);
  const [valueDolar, setValueDolar] = useState(0);

  return (
    <div>
      <label htmlFor="pesoArg">Peso argentino</label>
      <input
        type="number"
        onChange={(e) => {
          setValuePesoArg(e.target.value);
          setValueDolar((e.target.value / 199.98).toFixed(4));
        }}
        value={valuePesoArg}
      />

      <label htmlFor="dolarEst">Dolar estadounidense</label>
      <input
        type="number"
        onChange={(e) => {
          setValueDolar(e.target.value);
          setValuePesoArg((e.target.value * 199.98).toFixed(4));
        }}
        value={valueDolar}
      />
    </div>
  );
};
