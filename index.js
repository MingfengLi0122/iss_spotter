const { nextISSTimesForMyLocation } = require("./iss");

const printOutPasstimes = function(passTimes) {
  for (let pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printOutPasstimes(passTimes);
});


// ISS Soptter III
// const { fetchISSFlyOverTimes } = require("./iss");
// const coords = { latitude: '49.27670', longitude: '-123.13000', altitude: '1650.0' };

// fetchISSFlyOverTimes(coords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work:", error);
//     return;
//   }
//   console.log("It worked. The passTimes are :", passTimes);
// });

// ISS Spotter II
// const { fetchCoordsByIp } = require("./iss");

// const IPV4 = "2604:3d08:7281:2100:5115:8869:c4f3:2693";
// fetchCoordsByIp(IPV4, (error, data) => {
//   if (error) {
//     console.log("It didn't work",error);
//     return;
//   }
//   console.log("It worked! Returned data:",data);
// });

// ISS Spotter I
//const { fetchMyIP } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work", error);
//   }
//   console.log("It worked! Returned Ip:", ip);
// })