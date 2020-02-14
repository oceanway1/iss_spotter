const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned IP:', ip);
  fetchCoordsByIP(ip, (coordsError, coordsData) => {
    if (coordsError) {
      console.log(coordsError)
      return;
    }
    console.log('It worked! Return coordinates are:', coordsData)
    if (coordsData) {
      fetchISSFlyOverTimes(coordsData, (flyoverError, passTimes) => {
        if (flyoverError) {
          console.log("It didn't work!", flyoverError);
          return;
        }

        console.log('It worked! Returned flyover times:', passTimes);
      });

    }

  })
});

























