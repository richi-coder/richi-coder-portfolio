import { pageLoad } from "./firebase";

export const registerPageLoad = () => {
    ipservice()
}

const ipservice = async () => {
    const data = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=156366be41c444e2a45d6a3126fd9855');
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


/*
status NO
continent -- continent_name
continent_code
country -- country_name
countryCode -- country_code2 y country_code3
country_capital
latitude
longitude
languages
calling_code
coutry_tld
country_flag
city city
region NO
regionName state_prov
district
zip --- zipcode
timezone -- time_zone
isp
org- organization
*/


