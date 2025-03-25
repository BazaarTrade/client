import { createContext, PropsWithChildren, Ref, MutableRefObject, useContext, useEffect, useRef, useState } from 'react';

import { useWebSocketContext } from './wscontext';
import { CandleStick } from '../components/Chart/tempChart';
import { Mutable } from 'lightweight-charts';


type ChartContextType = {
    candleStickList: CandleStick[];
    lastCandleStick: CandleStick | undefined;
    prevCandleStick: CandleStick | undefined;
    offsetX: MutableRefObject<number>;
    offsetY: MutableRefObject<number>;
    baseTime: number;
    // scale: number;
    // step: number;
    // priceIncrement: number;
}

const ChartContext = createContext<ChartContextType>({} as ChartContextType);
type ContextType = PropsWithChildren<{}>;

export const ChartProvider = ({children}: ContextType) => {
    const {chart} = useWebSocketContext();
    const [candleStickList, setCandleStickList] = useState<CandleStick[]>([]);
    const [lastCandleStick, setLastCandleStick] = useState<CandleStick | undefined>(undefined);
    const [prevCandleStick, setPrevCandleStick] = useState<CandleStick | undefined>(undefined);
    const [baseTime, setBaseTime] = useState(Date.now());

    const offsetX = useRef(0);
    const offsetY = useRef(0);

    useEffect(() => {
        if (chart && chart.params) {
            setPrevCandleStick(lastCandleStick);
            if (chart.params.isClosed) {
                setCandleStickList((prev) => [...prev, chart.params]);
                setLastCandleStick(chart.params);
                setBaseTime(new Date(chart.params.openTime).getTime());
            }
            else {
                setLastCandleStick(chart.params);
                setBaseTime(new Date(chart.params.openTime).getTime());
            }
        }
    }, [chart]);



    return (
        <ChartContext.Provider value={{candleStickList, offsetX, offsetY, lastCandleStick, prevCandleStick, baseTime}}>
            {children}
        </ChartContext.Provider>
    );
};

export const useChartContext = () => {
    return useContext(ChartContext);
}