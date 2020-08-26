var express=require('express')
var path=require('path')
var hbs=require('hbs')
var request=require('request')
const geocode = require("./utiliyty/geocode.js")
const forecast = require("./utiliyty/forecast.js")


console.log(path.join(__dirname,"../public"))

var app=express();
app.set('view engine','hbs')
app.set('views',(path.join(__dirname,"../templates/views")))
hbs.registerPartials((path.join(__dirname,"../templates/partials"))
)



app.use(express.static(path.join(__dirname,"../public")))

app.get('',(req,res)=>
{
    res.render('index',{
        title:"home page",
        name:"anand"
    });
})

app.get('/about',(req,res)=>
{
    res.render('about',{
        title:"about page",
        name:"anand"
    });
})
app.get('/weather',(req,res)=>
{
   if(!req.query.address){
    return res.send({
        404:"must give location"
    })
   }

   


geocode.geolocation(req.query.address,(error,{lat,lon}={})=>
{       
    if(error)
    {
      return   console.log("error",error);
    }else{
        forecast.forecast(lat,lon,(error,forecastresponse)=>{
                if(error)
                    {
                     return console.log("error",error);
                    }
                    else{     
                        res.send({
                            title:"weather page",
                            name:"anand",
                            address:req.query.address,
                            temp:forecastresponse
                        }); 
                   // console.log("response",response.place);
                  //  console.log("response",forecastresponse);
                            }
                        })
    }
})
   
   
})
app.get('/help',(req,res)=>
{
    res.render('help',{
        title:"help page",
        name:"anand"
    });
})
app.get('/help/*',(req,res)=>
{
    res.render('404',{
        title:"error",
        name:"after help"
    });
})
app.get('*',(req,res)=>
{
    res.render('404',{
        title:"error1",
        name:"for any thing,not able to locate"
    });
})
app.listen(8000,(err)=>{
    console.log("error");
})