import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./utils.css";
import OrderBookTrade from "./pages/OrderBookTrade";
import { ThemeProvider } from "./state/themeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TradePage from "./pages/TradePage/TradePage";
import { WebSocketProvider } from "./contexts/wscontext";

const router = createBrowserRouter([
  {
    path: "/orderbook",
    element: <OrderBookTrade></OrderBookTrade>,
  },
  {
    path: "/",
    element: <TradePage></TradePage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <WebSocketProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </WebSocketProvider>
  // {/* </React.StrictMode>, */}
);
