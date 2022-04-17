import { useEffect } from "react";

const useScript = (url, isTrue) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = isTrue;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url, isTrue]);
};

export default useScript;
