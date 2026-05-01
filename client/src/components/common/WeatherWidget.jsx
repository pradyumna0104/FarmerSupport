import { useEffect } from "react";

export const WeatherWidget = () => {
  useEffect(() => {
    // This safely loads the script when the component appears on the screen
    if (!document.getElementById("weatherwidget-io-js")) {
      const script = document.createElement("script");
      script.id = "weatherwidget-io-js";
      script.src = "https://weatherwidget.io/js/widget.min.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden shadow-sm bg-[#142d16]">
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/20d9585d10/odisha/"
        data-label_1="ODISHA"
        data-label_2="WEATHER"
        data-days="3"
        data-theme="dark"
        data-basecolor="#142d16"
        data-textcolor="#ffffff"
        data-suncolor="#ff8c36"
        data-cloudcolor="#d9d6d6"
        data-raincolor="#7dcbff"
      >
        ODISHA WEATHER
      </a>
    </div>
  );
};