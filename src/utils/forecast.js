const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const forecastURL = `http://api.weatherstack.com/forecast?access_key=6d07fb953d27cdaeeb1d3109ce1dfeba&query=${latitude},${longitude}&units=f`;
    
    request({ url : forecastURL, json: true}, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather service", undefined);
        } else if (body.error) {
            callback("Unable to find location. Try another search", undefined);
        } else {
            callback(undefined, "The current temp is " + body.current.temperature + " degrees out and It feels like " + body.current.feelslike)
        }
    });
}

module.exports = forecast;