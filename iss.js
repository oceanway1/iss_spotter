// const request = require('request');
// const fetchMyIP = function (callback) {
//   request('https://api.ipify.org?format=json', (error, response, body) => {
//     if (error) return callback(error, null);

//     if (response.statusCode !== 200) {
//       callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
//       return;
//     }

//     const ip = JSON.parse(body).ip;
//     callback(null, ip);
//   });
// };


// const fetchCoordsByIP = function (ip, callback) {
//   request(`https://ipvigilante.com/json/${ip}`, (error, response, body) => {
//     if (error) {
//       callback(error, null);
//       return;
//     }

//     if (response.statusCode !== 200) {
//       callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
//       return;
//     }

//     const { latitude, longitude } = JSON.parse(body).data;
//     // console.log('lat/lng data:', { latitude, longitude });

//     callback(null, { latitude, longitude });
//   });
// };




// const fetchISSFlyOverTimes = function (coords, callback) {
//   const url = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`;

//   request(url, (error, response, body) => {
//     if (error) {
//       callback(error, null);
//       return;
//     }

//     if (response.statusCode !== 200) {
//       callback(Error(`Status Code ${response.statusCode} when fetching ISS pass times: ${body}`), null);
//       return;
//     }

//     const passes = JSON.parse(body).response;
//     callback(null, passes);
//   });
// };

// const nextISSTimesForMyLocation = function (callback) {
//   fetchMyIP((error, ip) => {
//     if (error) {
//       return callback(error, null);
//     }

//     fetchCoordsByIP(ip, (error, loc) => {
//       if (error) {
//         return callback(error, null);
//       }

//       fetchISSFlyOverTimes(loc, (error, nextPasses) => {
//         if (error) {
//           return callback(error, null);
//         }

//         callback(null, nextPasses);
//       });
//     });
//   });
// };

// module.exports = { nextISSTimesForMyLocation };


const request = require("request");
const fetchMyIP = function (callback) {
  // use request to fetch IP address from JSON API
  request("https://api.ipify.org/?format=json", (error, response, body) => {
    if (body) {
      const ip = JSON.parse(body).ip
      callback(null, ip);
    }
    if (error) {
      callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
    }
    function callback(error, ip) {
      if (ip) {
        console.log(ip)
      }
      else {
        console.log(error)
      }
    }
  })
}


const fetchCoordsByIP = function (ip, callback) {
  request("https://ipvigilante.com/8.8.8.8", (error, response, body) => {
    if (error) {
      callback(error, null)
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
    }
    const latitude = JSON.parse(body).data.latitude;
    const longitude = JSON.parse(body).data.longitude;
    const data = { latitude, longitude }
    callback(null, data)
    function callback() {
      if (error) {
        console.log(error)
      }
      if (data) {
        console.log(data)
      }
    }
  })

}


fetchCoordsByIP();


module.exports = { fetchMyIP, fetchCoordsByIP };
