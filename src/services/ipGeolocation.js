import axios from 'axios';

const BASE_URL = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_90W84W2JrGu3djoqriryTpuFs8VkO';
const serviceLocation = {
    getIpLocation: (params) => axios.get(
        BASE_URL,
        { params }
    )
}
export default serviceLocation