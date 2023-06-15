import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useFormContext, useUpdateFormContext } from "./AppContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth, readResumeDownloadURl, storage } from "../scripts/firebase";
import { getDownloadURL, ref } from "firebase/storage";

function FormEnd() {
  const linkRef = useRef();
  const navigate = useNavigate();
  const formData = useFormContext();
  const updateFormData = useUpdateFormContext();
  const location = useLocation();
  const formValues = Object.values(formData);
  const lastData = formValues.slice(0);
  const currentLocation = formValues.indexOf("");
  const [formendLoading, setFormendLoading] = useState(true)

  useEffect(() => {
    // Redirects to /contact in case phone is not verified
    updateFormData("formLocation", location.pathname);

    onAuthStateChanged(auth, (firebaseUser) => {
        setTimeout(() => {
          setFormendLoading(false)
          if (firebaseUser.phoneNumber === null) {
            setTimeout(() => {
              navigate(`/contact/`);
            }, 3000);
          }
        }, 2000);
      });

    window.addEventListener("popstate", (e) => {
      navigate(`/contact/`);
    });
  }, [formData.formLocation]);

  // testing download
  function downloadResume() {
    readResumeDownloadURl()
      .then((url) => {
        console.log("Succesful");
        fetch(url, { method: "GET", referrerPolicy: "no-referrer" })
          .then((res) => res.blob())
          .then((res) => {
            const aElement = document.createElement("a");
            aElement.setAttribute("download", "richiCoderResume.pdf");
            const href = URL.createObjectURL(res);
            aElement.href = href;
            aElement.setAttribute("target", "_blank");
            aElement.click();
            URL.revokeObjectURL(href);
          })
          .catch((error) => alert("Download failed...!"));
      })
      .catch((error) => console.log("ERROR", error));
  }

  return (
    <>
      {
        formendLoading ?
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-center'>
                                  <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div> :
        <div className="w-full text-5xl show text-center py-2 px-4">
          {formData.phoneTest ? (
            <div className="show flex flex-col items-center justify-center gap-16 md:gap-10">
              <div>Thank you very much!</div>
              <button
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl px-6 py-3 bg-blue-500 transition-all ladder rounded-lg"
                onClick={downloadResume}
              >
                DOWNLOAD RESUME
              </button>
              {/* <a href="/">Come back to richicoder.com</a> */}
            </div>
          ) : (
            <div className="show">Please complete the form!</div>
          )}
        </div>
      }
    </>
  );
}

export default FormEnd;
