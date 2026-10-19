import ReactDOM from "react-dom/client";

import App from "./App";
import Home from "./Home";
const rootItem = document.getElementById("root");

const root = ReactDOM.createRoot(rootItem);

root.render(
  <>
    <App />
    <App />
    <App />
    <Home/>
  </>,
);
