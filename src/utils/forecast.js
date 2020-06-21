const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const urlForecast = "http://api.weatherstack.com/current?access_key=2a825fac76104d94665492b650f4d85e&query=" + encodeURIComponent(latitude) + "," + encodeURIComponent(longitude) + "&units=m"

    request({url: urlForecast, json: true}, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather services!", undefined)
        } else if (body.success === false) {
            callback("Unable to fetch location weather", undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]  + ". It is currently "+ body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out.")
        }
    })

}

module.exports = forecast