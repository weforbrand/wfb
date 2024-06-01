import { useEffect } from "react";

const TawkToWidget = () => {
  useEffect(() => {
    const tawkToSrc = process.env.REACT_APP_TAWKTO_SRC;
    if (!tawkToSrc) {
      console.error(
        "TawkTo script source is not defined in the environment variables"
      );
      return;
    }

    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = tawkToSrc;
    s.charset = "UTF-8";
    s.setAttribute("crossorigin", "*");
    document.head.appendChild(s);

    return () => {
      document.head.removeChild(s);
    };
  }, []);

  return null;
};

export default TawkToWidget;
