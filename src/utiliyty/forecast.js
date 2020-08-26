const request = require("request")
var forecast=(lat,lon,callback)=>
{
 var url="http://api.weatherstack.com/current?access_key=21dd4701a329fce1f548912ed74d05e4&query="+lat+","+lon+"&units=f";
request({url:url,json:true},(error,response)=>{
                if(error)
                {
                    callback("The utilizing url is not working",undefined);
                }
                else if(response.body.error){
                    callback("Give proper latitiude and longitude name",undefined)
                } else{
                    callback(undefined,{
                        temp:response.body.current.temperature
                    })

                }
               })
}
module.exports.forecast=forecast