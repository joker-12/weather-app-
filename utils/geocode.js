const request=require('request');

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoiam9rZXItMTIiLCJhIjoiY2s0enpsdmU5MGJobjNsbnN6Y3Z2b2ViZCJ9.EGdDkH1puZUUF-geYz1Gow&limit=1';
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('unable to access to locations',undefined)
        }
        else if(response.body.features.length===0){
            callback('unable to find locations try another search');
        }
        else{
            callback(undefined,{
                    latitude:response.body.features[0].center[1],
                    longitude:response.body.features[0].center[0],
                    location:response.body.features[0].place_name
            })
         }
     })
}
module.exports=geocode;