const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation };



// const fetchISSFlyOverTimes = function(body) {
//   const { latitude, longitude } = JSON.parse(body).data;
//   const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
//   return request(url);
// };

// module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };



