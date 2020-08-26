console.log("printing")


 var input =document.querySelector('input')
 var para1 =document.querySelector('#para1')
 var para2 =document.querySelector('#para2')





var selector =document.querySelector('form')
selector.addEventListener('submit',(e)=>{
            e.preventDefault();
         //   console.log("hello")
        //   console.log(input.value)

        para1.textContent="loading..."
        para2.textContent=" loading...";

           fetch("http://localhost:8000/weather?address="+input.value).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            conssole.log("error")
        }else{
            para1.textContent=data.temp.temp
            para2.textContent=data.address
    
            console.log(data.temp.temp)
            console.log(data.address)
        }
    })
})


})