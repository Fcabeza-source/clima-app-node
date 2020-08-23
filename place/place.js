const axios = require('axios');


const getPlace = async (dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/?json=1&locate=location?city=${encodedUrl}`,
        headers: { 'auth': '337101038905203597347x127292' }
    });

    const resp = await instance.get();

    if (resp.data.matches === null) {
        throw new Error('No hay resultados para esta busqueda');
    }

    const { longt: lng, latt: lat } = resp.data;
    const { city: direccion } = resp.data.standard;

    return {

        direccion,
        lat,
        lng
    }

}

module.exports = {
    getPlace
}