const fetch = require('node-fetch');

// Promise
function getCovidapi(){
    const jsonData = fetch('https://ghoapi.azureedge.net/api/DIMENSION/COUNTRY/DimensionValues')
//    const jsonData = fetch('https://covidtracking.com/api/states/info')
                     .then((apiData) => {
                        console.log(apiData);
                        return apiData.json();    
                    }).then((jsonData) => {
                        console.log(jsonData);
                    }).catch((err) => {
                        console.log(err.message);
                    });
}




//  // Async Awaits
// async function getCovidapi(){
//     const jsonData = await fetch('https://covidtracking.com/api/states/info');
//     const jsData = await jsonData.json();
//     console.log(jsData);
// }



getCovidapi();