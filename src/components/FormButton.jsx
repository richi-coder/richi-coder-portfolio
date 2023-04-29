import { useLocation, useNavigate } from "react-router-dom";
import { inputTypes, useFormContext, useUpdateFormContext } from "./AppContext";
import { db, readUserData } from "../scripts/firebase";
import { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";

function FormButton({ direction, user }) {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const splittedLocation = location.split("");
  const currentLocation = splittedLocation[splittedLocation.length - 1];
  const locationSplitted = location.split("");
  const formData = useFormContext();
  const updateFormData = useUpdateFormContext();
  const lastInput = 'J';
  const isButton = location === "/contact" && direction === "forward";
  const [buttonEnabled, setButtonEnabled] = useState(true); // Disabled
  let currentInput = locationSplitted[locationSplitted.length - 1];
  

  useEffect(() => {
    if (
      (location !== "/contact" &&
        location !== "/contact/formend" &&
        formData[formData.scheme[location]] === "")
        // || /\s/.test(formData[formData.scheme[location]])
    ) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  }, [location, formData[formData.scheme[location]]]); // possible trouble HERE coming from changing formLocation from name,lastname,company to input1, input2, this affects button disabled required before filling inputs

  const inputNavigation = () => {
    // URLs moving
    if (location === `/contact/input${lastInput}`) {
      navigate("/contact/formend");
      return;
    }
    if (location === "/contact") {
      navigate(`/contact/inputA`);
    } else {
      navigate(`/contact/input${String.fromCharCode(currentInput.charCodeAt(0) + 1)}`);
      
    }
  };
  // Backend Update
  const backendUpdate = () => {
    const { formLocation, formComplete, isLoading, inputShow, scheme, buttonsLoading, phoneTest, inputErrorMessage, ...dataForm } =
      formData;
    readUserData(user.uid, formData).then(async (docIDtoUpdate) => {
      await updateDoc(doc(db, "jobContacts", docIDtoUpdate), {
        formData: dataForm,
      });
      // After updating data in the server, just navigates to next input
      inputNavigation();
    });
  };

  const frontendValidation = () => {
    // Frontend validations when clicking next button
    const inputLocation = formData.scheme[location];
    const currentInputValue = formData[formData.scheme[location]];
    
    if (location !== "/contact/formend") {

      // Name validations
      if (inputLocation === 'name')  {
            // From 2 names up to 5 names
            if (!(/^[a-zA-Z]{3,}\s[a-zA-Z]{3,}$/.test(currentInputValue) || /^[a-zA-Z]{3,}\s[a-zA-Z]{3,}\s[a-zA-Z]{3,}$/.test(currentInputValue) || /^[a-zA-Z]{3,}\s[a-zA-Z]{3,}\s[a-zA-Z]{3,}\s[a-zA-Z]{3,}$/.test(currentInputValue) || /^[a-zA-Z]{3,}\s[a-zA-Z]{3,}\s[a-zA-Z]{3,}\s[a-zA-Z]{3,}\s[a-zA-Z]{3,}$/.test(currentInputValue))){
              return null           
            } 
      } 
      // Company validations
      if (inputLocation === 'company')  {
        // From 1 word up to 5 words
        if (!(/^[\w]{3,}$/.test(currentInputValue) || /^[\w]{3,}\s[\w]{3,}$/.test(currentInputValue) || /^[\w]{3,}\s[\w]{3,}\s[\w]{3,}$/.test(currentInputValue) || /^[\w]{3,}\s[\w]{3,}\s[\w]{3,}\s[\w]{3,}$/.test(currentInputValue) || /^[\w]{3,}\s[\w]{3,}\s[\w]{3,}\s[\w]{3,}\s[\w]{3,}$/.test(currentInputValue))) {
          return null           
        } 
      } 
      // Position validations
      if (inputLocation === 'position' || inputLocation === 'city')  {
        // From 1 names up to 5 words
        if (!(/^[a-zA-Z]{5,}$/.test(currentInputValue) || /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/.test(currentInputValue) || /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/.test(currentInputValue) || /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}\s[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/.test(currentInputValue) || /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}\s[a-zA-Z]{2,}\s[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/.test(currentInputValue))){
          return null           
        } 
      } 
      // URL validations
      if (inputTypes[inputLocation] === 'url')  {
            console.log('URL ENTRANCE');
            if (!/^[a-z\d.\-]{5,}\.[a-z]+$/.test(currentInputValue)){
              return null
            } 
      } 
      // Email validations
      if (inputTypes[inputLocation] === 'email')  {
            console.log('EMAIL ENTRANCE');
            if (!/^[\w\D]{2,}@[a-z\d]+\.[a-z]+$/.test(currentInputValue)){
              return null
            } 
      } 
      // Telephone validations
      if (inputTypes[inputLocation] === 'tel')  {
        console.log('TELEPHONE ENTRANCE');
        if (!/^[+]([\d]{2}|[\d]{1})[\d]{10}$/.test(currentInputValue)){
          return null
        } 
  } 
      
      

      // if (/\d/.test(value) || !/[a-zA-Z]$|^$/.test(value))
      // Form validation at frontend
      // if (formData[formData.formLocation] === "") {
      //   setButtonEnabled(true);
      //   return;
      // }
      // if (/\s/.test(formData[formData.formLocation])) {
      //   setButtonEnabled(true);
      //   return;
      // }

      // Backend fulfill
      backendUpdate();
      // return true
    }
    if (location === "/contact") {
      inputNavigation();
    }
  };

  const navigation = () => {
    // Buttons Loading

    // Backward click
    if (direction === "backward") {
      if (location === "/contact/inputA") {
        updateFormData('updateServerDataAtContext', {"inputShow": "translate-x-[100vw]", "buttonsLoading": false});
        setTimeout(() => {
          navigate(`/contact`);
        }, 500);
      } else {
        updateFormData('updateServerDataAtContext', {"inputShow": "translate-x-[100vw]", "buttonsLoading": true});
        setTimeout(() => {
          navigate(`/contact/input${String.fromCharCode(currentInput.charCodeAt(0) - 1)}`);
        }, 500);
      }
    }
    // Forward click
    if (direction === "forward") {
      if (location === "/contact") {
        updateFormData('updateServerDataAtContext', {"inputShow": "opacity-0", 'buttonsLoading': true});
        inputNavigation();
      } else {
        // Frontend validation
        updateFormData('updateServerDataAtContext', {"inputShow": "-translate-x-[100vw]", 'buttonsLoading': true});
        const frontendValidationResult = frontendValidation();
        if (frontendValidationResult === null) {
          setTimeout(() => {
            updateFormData('updateServerDataAtContext', {"inputShow": '', 'buttonsLoading': false, 'inputErrorMessage': `Invalid ${formData.scheme[location] === 'companyURL' ? 'website URL' : formData.scheme[location] === 'telephone' ?  'number. Please use this format: +001234567890' : formData.scheme[location]}`});
          }, 1000);
        }
      }
    }
  };

  return (
    <>
      {location === "/contact" && direction === "backward" ? null : (
        <>
          
          <button
            onClick={navigation}
            className={
              isButton
                ? "bg-blue-700 px-6 py-3 rounded-lg sm:hover:bg-blue-300 font-bold  transition-all ladder"
                : `transition-all ${!buttonEnabled && direction === 'forward' ? 'sm:hover:scale-110' : ''} ${direction === 'backward' ? 'sm:hover:scale-110' : ''}`
            }
            disabled={direction === "backward" ? false : buttonEnabled}
          >
            {isButton ? (
              "Let's go!"
            ) : (
              <div className={`flex flex-row items-center gap-5 text-4xl`}>
                <div className={direction === 'backward' ? 'order-2 -mt-[3%]' : '-mt-[3%]'}>{direction === 'forward' ? 'Next' : 'Back'}</div>
                <i
                className={
                  direction === "forward"
                    ? "fa fa-chevron-right"
                    : "fa fa-chevron-left"
                }
              ></i>
              </div>
              
            )}
          </button>
        </>
      )
    }
    </>
  );
}

export default FormButton;
