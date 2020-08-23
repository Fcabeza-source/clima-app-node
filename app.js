const { getPlace } = require("./place/place");
const { getWeather } = require("./weather/weather");

const { argv } = require("yargs").options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
});


const getInfo = async (dir) => {

    try {
        const coords = await getPlace(dir);
        const temp = await getWeather(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp} grados celsius`;

    } catch (e) {
        return `No se pudo determinar el clima de ${dir}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);







