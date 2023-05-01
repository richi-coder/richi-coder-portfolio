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
  const check = formData.phoneTest;
  const currentLocation = formValues.indexOf("");

  useEffect(() => {
    // testing email verif
    // const actionCodeSettings = {
    //   // URL you want to redirect back to. The domain (www.example.com) for this
    //   // URL must be in the authorized domains list in the Firebase Console.
    //   url: 'https://localhost:3000/contact/formend',
    //   // This must be true.
    //   handleCodeInApp: true,
    //   iOS: {
    //     bundleId: 'com.example.ios'
    //   },
    //   android: {
    //     packageName: 'com.example.android',
    //     installApp: true,
    //     minimumVersion: '12'
    //   },
    //   // dynamicLinkDomain: 'richicoder.com'
    // };
    // const auth = getAuth();
    // const email = 'richicoder@gmail.com'
    // sendSignInLinkToEmail(auth, email, actionCodeSettings)
    //   .then(() => {
    //     // The link was successfully sent. Inform the user.
    //     // Save the email locally so you don't need to ask the user for it again
    //     // if they open the link on the same device.
    //     window.localStorage.setItem('emailForSignIn', email);
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage, 'EMAIL VERIF');
    //     // ...
    //   });

    // ****************----
    // Redirects to /contact in case phone is not verified
    updateFormData("formLocation", location.pathname);
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser.phoneNumber === null) {
        setTimeout(() => {
          navigate(`/contact`);
        }, 3000);
      }
    });
    // if (lastData.some(item => item === '')) {
    //   setTimeout(() => {
    //     navigate(`/contact`)
    //   }, 3000);
    //   return
    // }
    // DIFFERENT IF CHECKING PHONENUMBER AT USER

    window.addEventListener("popstate", (e) => {
      navigate(`/contact`);
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
            aElement.setAttribute("download", "richiPDF.png");
            const href = URL.createObjectURL(res);
            aElement.href = href;
            aElement.setAttribute("target", "_blank");
            aElement.click();
            URL.revokeObjectURL(href);
          })
          .catch(error => alert('Download failed...!'))
      })
      .catch((error) => console.log("ERROR", error));
  }

  return (
    <div className="w-full text-5xl show text-center py-2">
      {check ? (
        <div className="show flex flex-col items-center justify-center gap-5">
          <div>Thank you very much!</div>
          <button
            className="px-6 py-3 bg-blue-500 transition-all ladder rounded-lg"
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
  );
}

export default FormEnd;
