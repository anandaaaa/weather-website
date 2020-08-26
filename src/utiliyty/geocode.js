const request = require("request")

var geolocation=(address,callback)=>
{
    var url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1Ijoidm9vcmFhbmFuZGEiLCJhIjoiY2tlOGF4ajFmMW5vMTJzcG9nNmJsNnl3YiJ9.fL0d1tdG6PUCWgJm9O1F2A&limit=1";
    request({url:url,json:true},(error,response)=>{
                if(error)
                {
                    callback("The utilizing url is not working",undefined);
                }
                else if(response.body.features.length==0){
                    callback("Give proper location name",undefined)
                } else{
                    callback(undefined,{
                        lon:response.body.features[0].center[0],
                        lat:response.body.features[0].center[1],
                        place:response.body.features[0].place_name
                    })

                }
               })
}
module.exports.geolocation=geolocation