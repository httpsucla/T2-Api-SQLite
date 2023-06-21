import axios from 'axios'

const apiKey = '0b8446254b154129059e1c2a6c174ce3'
export default axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather',
    params: {
        appid: apiKey
    }
})