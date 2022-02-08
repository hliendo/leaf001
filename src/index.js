import React from "react";
import ReactDOM from "react-dom";
import Map from "./Map";

import "./styles.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";

const rootElement = document.getElementById("root");
ReactDOM.render(<Map />, rootElement);
