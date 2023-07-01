import { useState } from "react";
import { readResumeDownloadURl } from "../scripts/firebase";
import './styles/show.css'

function DownloadResumeButton({ background }) {
  const [buttonState, setButtonState] = useState(null);

  function downloadResume() {
    setButtonState(false)
    readResumeDownloadURl()
      .then((url) => {
        // console.log("Succesful");
        fetch(url, { method: "GET", referrerPolicy: "no-referrer" })
          .then((res) => res.blob())
          .then((res) => {
            const aElement = document.createElement("a");
            aElement.setAttribute("download", "richiCoderResume_Frontend_Dev.pdf");
            const href = URL.createObjectURL(res);
            aElement.href = href;
            aElement.setAttribute("target", "_blank");
            aElement.click();
            URL.revokeObjectURL(href);
            setButtonState(true)
          })
          .catch((error) => alert("Download failed...!"));
      })
      .catch((error) => console.log("ERROR", error));
  }


  return (
    <button
      disabled={buttonState != null ? true : false}
      className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-6 py-3 ${background} text-white transition-all ladder rounded-lg z-10 select-none`}
      onClick={downloadResume}
    >
      {buttonState === null
        ? "DOWNLOAD RESUME"
        : buttonState === false
        ? "Preparing download!"
        : "Downloading!"}
    </button>
  );
}

export default DownloadResumeButton;
