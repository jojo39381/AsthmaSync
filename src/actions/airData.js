import axios from "axios";

export const fetchAirData = async (lat, lon) => {
    var params = {lat:lat, lon:lon}
    var airData = await axios.get("https://hhtduxep.brev.dev/api/test", {params:params})
    
    return airData.data

    
    
}
