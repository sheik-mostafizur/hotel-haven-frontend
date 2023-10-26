import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {RouterProvider} from "react-router-dom";
import router from "./routes";
import {Toaster} from "react-hot-toast";
import axios from "axios";
import {Provider} from "react-redux";
import store from "./redux/store";
import App from "./App";

const isToken = localStorage.getItem("token");

axios.defaults.baseURL = "https://hotel-haven-backend.vercel.app/";
// axios.defaults.baseURL = "http://localhost:3000";

if (isToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${isToken}`;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
      </App>
    </Provider>
  </React.StrictMode>
);
