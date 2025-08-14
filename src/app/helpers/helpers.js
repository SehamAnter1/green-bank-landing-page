import { toast } from "react-toastify";
import i18next from "./../../i18next";
import cookies from "js-cookie";

// truncate text :
export function truncateText(text, length) {
  if (text?.length <= length) {
    return text;
  }
  return text?.substring(0, length) ;
  // return text?.substring(0, length) + "...";
}
// currentLanguageCode

  export let currentLanguageCode = cookies.get("i18next") || "ar";

  // This function help us to toggle between languages
  export const handleLanguageChange = () => {
    const targetLanguage = currentLanguageCode === "en" ? "ar" : "en";
    cookies.set("i18next", targetLanguage);
    currentLanguageCode = targetLanguage;
    i18next.changeLanguage(targetLanguage);
  };
  

// getRandomPosition
export function getRandomPosition(min = 0, max = 150) {
  return Math.random() * (max - min) + min;
}
// get today
export function getFormattedDate(lng) {
  const today = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  return today?.toLocaleDateString(lng, options);
}
// for response errors
export const logAndDisplayErrors = (errorResponse) => {
  if (typeof errorResponse === "string" &&(errorResponse.includes("<!DOCTYPE html>")||errorResponse.includes("<!doctype html>"))) {
      toast.error("An unexpected error occurred. Please try again.");
      return;
  }
  if (typeof errorResponse === "object" && !Array.isArray(errorResponse)) {
    for (const field in errorResponse) {
      const errorValue = errorResponse[field];
      if (typeof errorValue === "string") {
        if(field!=="detail"&&field!=="non_field_errors"&&field!=="error"){
          toast.error(`${field} : ${errorValue}`) ;
      }else{
        toast.error(`${errorValue}`) ;
      }
      } else if (Array.isArray(errorValue) && errorValue.length > 0) {
        if(field!=="detail"&&field!=="non_field_errors"&&field!=="error"){
          toast.error(`${field} : ${errorValue[0]}`) ;
        }else{
          toast.error(`${errorValue[0]}`) ;
        }
      }
    }
  } else {
    toast.error("An error occurred while processing your request.");
  }

};