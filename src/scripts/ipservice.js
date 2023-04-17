import { jobContact } from "./firebase";

export const registerPageLoad = () => {
    ipservice()
}

const ipservice = async () => {
    const data = await fetch('http://ip-api.com/json/?fields=status,message,continent,country,countryCode,region,regionName,city,district,zip,timezone,isp,org,mobile,hosting,query');
    let json = await data.json();
    json = {
        ...json,
        navigatorLanguage: navigator.language,
        registerTime: Date()
    }
    jobContact(json)
}


