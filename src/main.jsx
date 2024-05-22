import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { FavouriteMoviesProvider } from "./context/FavouriteMoviesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavouriteMoviesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavouriteMoviesProvider>
  </React.StrictMode>
);
