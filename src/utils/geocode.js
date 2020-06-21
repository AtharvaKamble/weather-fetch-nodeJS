const request = require('request')

const geocode = (address, callback) => {
    const geoURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiYXRoYXJ2YWthbWJsZSIsImEiOiJja2I5OXc4NTgwYzhvMnhvNGs3eHJ0d3lnIn0.ndsDSck1XUWOtID6vkH57w&limit=1"
    
    request({url: geoURL, json: true}, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather services!", undefined)
        } else if (body.features.length === 0) {
            callback("Unable to find location.", undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode