import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </Provider>
  </StrictMode>
);
