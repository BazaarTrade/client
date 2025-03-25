import { createContext, PropsWithChildren, useState, useContext } from "react";

type PrecisionContextType = {
  precision: number[] | undefined;
  setPrecision: Function;
  getPrecisions: Function;
  transformPrecisions: Function;
  transformPrecision: Function;
  currentPrecision: number;
  setCurrentPrecision: Function;
};

export const PrecisionContext = createContext<PrecisionContextType>(
  {} as PrecisionContextType
);
type ContextType = PropsWithChildren<{}>;

export const PrecisionProvider = ({ children }: ContextType) => {
  const [precision, setPrecision] = useState<number[]>([]);
  const [currentPrecision, setCurrentPrecision] = useState<number>(0);
  const ENDPOINT = "http://localhost:8080";

  const getPrecisions = async () => {
    // try {
    //   const response = await fetch(`${ENDPOINT}/pricePrecisions/BTC_USDT`, {
    //     method: "GET",
    //     headers: { "Content-Type": "application/json" },
    //   });

    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }
    //   const responseData = await response.json();
    //   setPrecision(responseData.pricePrecisions);
    //   setCurrentPrecision(responseData.pricePrecisions[0]);
    //   console.log("current precision:", currentPrecision);
    // } catch (error) {
    //   console.error("Error placing order:", error);
    // }
  };

  const transformPrecisions = (precision: number[]) =>
    precision.map((p) =>
      p < 0 ? 1 / Math.pow(10, Math.abs(p)-1) : Math.pow(10, Math.abs(p-1)) 
    );

  const transformPrecision = (precision: number) => {
    return precision < 0 ? 1 / Math.pow(10, precision) : Math.pow(10, Math.abs(precision));
  }

  return (
    <PrecisionContext.Provider
      value={{ precision, setPrecision, getPrecisions, transformPrecisions, transformPrecision, currentPrecision, setCurrentPrecision }}
    >
      {children}
    </PrecisionContext.Provider>
  );
};

export const usePrecisionContext = () => useContext(PrecisionContext);
