function one() {
    console.log("first function executed");
  }
  
  function two() {
  //   console.log("second func started ..");
  three();
    setTimeout(() => {
      console.log ("Second function's data is fetched"), 5000;
    });
  }
  
  function three() {
    console.log("Third funtion executed.");
  }
  
  one();
  two();
  // three();
  // setTimeout();