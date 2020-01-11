 const request=require('request');
 const geocode=require('./utils/geocode.js');
 const forcast=require('./utils/forcast.js')
// const url="https://api.darksky.net/forecast/fac73673889b777fc3d7b186e67a6a38/37.8267,-122.4233?units=si";
// request({url:url,json:true},(error,response) =>{
//     if(error){
//         console.log('unable to access the weather info');
//     }
//     else if(response.body.error){
//         console.log('not able to find location');
//     }
//     else{
//         console.log('it is currently '+ response.body.currently.temperature +' degrees out. There is a '+ response.body.currently.precipProbability+ ' % chance of rain.');
//     }
    
// });
//   const location="https://api.mapbox.com/geocoding/v5/mapbox.places/Faridabad.json?access_token=pk.eyJ1Ijoiam9rZXItMTIiLCJhIjoiY2s0enpsdmU5MGJobjNsbnN6Y3Z2b2ViZCJ9.EGdDkH1puZUUF-geYz1Gow&limit=1";
//   request({url:location,json:true},(error,response)=>{
//       if(error){
//           console.log('unable to access to loctions');
//       }
//       else if(response.body.features.length===0){
//           console.log('wrong api');
//       }
//       else{
//         const latitude=response.body.features[0].center[1];
//         const longitude=response.body.features[0].center[1];
//         console.log(latitude +" and "+ longitude);
//       }
// });
// const geocode=(address,callback)=>{
//     const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoiam9rZXItMTIiLCJhIjoiY2s0enpsdmU5MGJobjNsbnN6Y3Z2b2ViZCJ9.EGdDkH1puZUUF-geYz1Gow&limit=1';
//     request({url:url,json:true},(error,response)=>{
//         if(error){
//             callback('unable to access to locations',undefined)
//         }
//         else if(response.body.features.length===0){
//             callback('unable to find locations try another search');
//         }
//         else{
//             callback(undefined,{
//                     latitude:response.body.features[0].center[1],
//                     longitude:response.body.features[0].center[0],
//                     location:response.body.features[0].place_name
//             })
//          }
//      })
// }
const address=process.argv[2];
if(!address){
    console.log('please provide an address');
}
else{
    geocode(address,(error,data)=>{
        if(error){
            console.log(error);
        }
        else{
            forcast(data.latitude,data.longitude,(error,forcastdata)=>{
                if(error){
                    console.log(error)
                }
                else{
                    console.log(data.location);
                    console.log(forcastdata);
                }
            });
        }
    
    });
}



