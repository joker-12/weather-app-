const request=require('request');
const forcast=(latitude,longitude,callback)=>{
    const url='https://api.darksky.net/forecast/fac73673889b777fc3d7b186e67a6a38/' +latitude  + ',' + longitude + '?units=si'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('unable to access the weather info',undefined);
        }
        else if(response.body.error){
            callback('not able to find location',undefined);
        }
        else{
            callback(undefined,'it is currently '+ response.body.currently.temperature +' degrees out. There is a '+ response.body.currently.precipProbability+ ' % chance of rain.')
        }
    })
}
module.exports=forcast;