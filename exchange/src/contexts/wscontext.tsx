import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useRef,
    useState,
  } from "react";
import { OrderRowType } from "../components/Orders/OpenOrders/OpenOrderRow";
  
  type WebSocketType = {
    ws: WebSocket | null;
    connectionStatus: number | undefined;
    sendMessage: (message: object) => void;
    orderBook: OrderBook | undefined;
    trades: Trades | undefined;
    updatedTrade: OrderRowType | undefined;
    chart: candleStick | undefined;

  };

  type Trade = {
    isBid: boolean;
    pair: string;
    price: string;
    qty: string;
    time: string;
  };
  
  type Trades = {
    topic: string;
    params: Trade[];
  };
  
  type OrderBook = {
    topic: string;
    params: {
      pair: string;
      bids: {
        price: string;
        qty: string;
      }[] | null; 
      asks: {
        price: string;
        qty: string;
      }[] | null; 
      bidsQty: string;
      asksQty: string;
    };
  };

  type candleStick = {
    topic: string;
    params: {
      pair: string;
      timeframe: string;
      openTime: string;
      closeTime: string;
      openPrice: string;
      closePrice: string;
      highPrice: string;
      lowPrice: string;
      volume: string;
      isClosed: boolean;
    };
  };
  
  
  const WebSocketContext = createContext<WebSocketType>({} as WebSocketType);
  type WebSocketProviderProps = PropsWithChildren<{}>;
  
  export const WebSocketProvider = ({ children }: WebSocketProviderProps) => {
    const ws = useRef<WebSocket | null>(null);
    const [connectionStatus, setConnectionStatus] = useState<number | undefined>(undefined);
    const [orderBook, setOrderBook] = useState<OrderBook>();
    const [trades, setTrades] = useState<Trades>();
    const [updatedTrade, setUpdatedTrade] = useState<OrderRowType>();
    const [chart, setChart] = useState<candleStick>();
  
    useEffect(() => {
        const userID = localStorage.getItem("userID");
        console.log('UserID:', userID);
        ws.current = new WebSocket(`ws://localhost:8080/ws/1`);
        if (ws.current) {
          console.log('WebSocket created, readyState:', ws.current.readyState);
        }
    
        const handleOpen = () => {
          console.log('WebSocket connection opened, readyState:', ws.current?.readyState);
          setConnectionStatus(ws.current?.readyState);
        };
    
        const handleError = (error: Event) => {
          console.error('WebSocket error:', error);
          console.log('WebSocket error occurred, readyState:', ws.current?.readyState);
          setConnectionStatus(ws.current?.readyState);
        };
    
        const handleClose = (event: CloseEvent) => {
          console.log('WebSocket connection closed, readyState:', ws.current?.readyState);
          setConnectionStatus(ws.current?.readyState);
          console.log('Close event:', event);
        };
    
        const handleMessage = (event: MessageEvent) => {
          const message = JSON.parse(event.data);
          if (message.topic === "orderBook" && message.params) {
            setOrderBook(message);
          }

          if (message.topic === "trades" && message.params) {
            setTrades(message);
          }

          if (message.topic === "orderUpdate") {
            setUpdatedTrade(message.order); }
          
          if (message.topic === "candleStick") {
            setChart(message);
          }
          // console.log('Message from WebSocket:', message);
        }
    
      ws.current.onopen = handleOpen;
      ws.current.onerror = handleError;
      ws.current.onclose = handleClose;
      ws.current.onmessage = handleMessage;
  
      return () => {
        if (ws.current) {
          console.log(
            "Cleaning up WebSocket connection, readyState before closing:",
            ws.current.readyState
          );
          if (
            ws.current.readyState === WebSocket.OPEN ||
            ws.current.readyState === WebSocket.CONNECTING
          ) {
            ws.current.close();
            console.log(
              "WebSocket connection closed in cleanup, readyState:",
              ws.current.readyState
            );
          }
        }
      };
    }, []);

    const sendMessage = (message: object) => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
          ws.current.send(JSON.stringify(message));
          console.log('Message sent:', message);
        } else {    
          console.log('WebSocket is not open. ReadyState:', ws.current?.readyState);
        }
      };
  
    return (
      <WebSocketContext.Provider value={{ ws: ws.current, sendMessage, connectionStatus, orderBook, trades, updatedTrade, chart }}>
        {children}
      </WebSocketContext.Provider>
    );
  };
  
  export const useWebSocketContext = () => useContext(WebSocketContext);
  
