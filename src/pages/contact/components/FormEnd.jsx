import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useFormContext, useUpdateFormContext } from "./AppContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@services/firebase";
import DownloadResumeButton from "./DownloadResumeButton";

function FormEnd() {
  const navigate = useNavigate();
  const formData = useFormContext();
  const updateFormData = useUpdateFormContext();
  const location = useLocation();
  const formValues = Object.values(formData);
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
              <DownloadResumeButton background={'bg-blue-500'} />
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
