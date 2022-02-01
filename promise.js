//https://www.youtube.com/watch?v=8zbM5sGaUjc

   //!--------normal------------
   let data= "initial state"
   setTimeout(function(){
   data="new State"
   },2000)
   console.log(data)                  //initial state
   
   //!---------normal-------
   let data= "initial state"
   setTimeout(function(){
   data="new State",
       console.log("inside timer")
   },2000)
   console.log(data)    //initial state   (after 2 sec)insider timer
   
   //!-------------promise------------
   let data=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("new state")
        },2000)
   })
   data.then(function(value){
       console.log(value)
   })