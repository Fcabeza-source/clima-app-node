const axios = require('axios');


const getWeather = async (lat, long) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=62ef9186ac4c22f97ba6de64a99841fe&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getWeather
}