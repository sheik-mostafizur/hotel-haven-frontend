import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-tooltip/dist/react-tooltip.css";
import {RouterProvider} from "react-router-dom";
import router from "./routes";
import {Toaster} from "react-hot-toast";
import {Provider} from "react-redux";
import store from "./redux/store";
import App from "./App";
import {HelmetProvider} from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <HelmetProvider>
      <Provider store={store}>
        <App>
          <RouterProvider router={router} />
          <Toaster position="bottom-right" />
        </App>
      </Provider>
    </HelmetProvider>
  </React.Fragment>
);
