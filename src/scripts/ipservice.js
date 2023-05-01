import { pageLoad } from "./firebase";

export const registerPageLoad = () => {
    ipservice()
}

const ipservice = async () => {
    const data = await fetch('https://ip-api.com/json/?fields=status,continent,country,countryCode,region,regionName,city,district,zip,timezone,isp,org,mobile,hosting,query');
    let json = await data.json();
    const jsonData = {
        registerTime: Date(),
        pageLoad: {
            ...json,
            navigatorLanguage: navigator.language,
        },
    }
    pageLoad(jsonData)
}



