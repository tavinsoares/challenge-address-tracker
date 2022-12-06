import axios from 'axios';

const BASE_URL = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_O40ngcx2QilKPegOs2Wix7b3Sv0Eb';
const serviceLocation = {
    getIpLocation: (params) => axios.get(
        BASE_URL,
        { params }
    )
}
export default serviceLocation