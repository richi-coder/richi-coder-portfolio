import { pageLoad } from "./services/firebase";

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
    // console.log('working', jsonData)
    pageLoad(jsonData)
}
