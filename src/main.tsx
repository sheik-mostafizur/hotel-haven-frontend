import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {RouterProvider} from "react-router-dom";
import router from "./routes";
import {Toaster} from "react-hot-toast";
import axios from "axios";
import {Provider} from "react-redux";
import store from "./redux/store";
import AuthInitialization from "./components/AuthInitialization";
import App from "./App";

axios.defaults.baseURL = "https://hotel-haven-backend.vercel.app/";

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
