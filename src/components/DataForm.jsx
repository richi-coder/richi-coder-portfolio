import React, { useLayoutEffect } from "react";
import AppContext from "./AppContext";
import AppContainer from "./AppContainer";

function DataForm() {
  useLayoutEffect(() => {
    const origin =
      document.referrer === "https://richicoder.com/contact/" ||
      document.referrer === "https://richicoder.com/contact" ||
      document.referrer === "https://richicoder.com/contact/formend" ||
      document.referrer === "https://richicoder.com/contact/formend/" ||
      document.referrer === "https://richicoder.com" ||
      document.referrer === "https://richicoder.com/" ||
      document.referrer === "http://localhost:3000/" ||
      document.referrer === "http://localhost:3000/contact" ||
      document.referrer === "http://localhost:3000/contact/" ||
      document.referrer === "http://localhost:3000/contact/formend" ||
      document.referrer === "http://localhost:3000/contact/formend/"
        ? true
        : false;
    
    if (!origin && import.meta.env.MODE != 'development') {
      window.location.replace("https://richicoder.com/");
    }
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-clip">
      <AppContext>
        <AppContainer />
      </AppContext>
    </div>
  );
}

export default DataForm;
