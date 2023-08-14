import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
//import App from "./App";

import StarRating from "./components/StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <StarRating maxStars={5} defaultRating={4} />
    <StarRating maxStars={10} size={64} color="blue" />
  </React.StrictMode>
);
