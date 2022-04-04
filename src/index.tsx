import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function Overlay() {
  return (
    <div className="absolute top-0 left-0 pointer-events-none w-full h-full">
      <a
        href="https://github.com/hyamero"
        target="_blank"
        className="absolute bottom-10 left-10 text-[13px]"
      >
        developed by
        <br />
        Dale Bañares
      </a>
      <div className="absolute -top-[10vw] right-0 -rotate-90 origin-bottom-right">
        <h1 className="text-gradient m-0 p-0 text-[8vw] font-medium tracking-tighter">
          Oh. So. Pro.
        </h1>
      </div>
      <div className="absolute top-10 left-10 text-[13px]">
        iPhone Configurator —
      </div>
    </div>
  );
}

ReactDOM.render(
  <>
    <App />
    <Overlay />
  </>,
  document.getElementById("root")
);
