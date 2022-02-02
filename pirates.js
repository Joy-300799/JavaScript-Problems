// Your task is to check if the gunners are loaded and ready, if they are: Fire!

// If they aren't ready: Shiver me timbers!

// Your gunners for each test case are 4 or less.

// When you check if they are ready their answers are in a dictionary and will either be: aye or nay

// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!

const cannonsReady = (gunners) => {
    let count = 0;
    let values = Object.values(gunners);
    for(let i=0;i<values.length;i++){
      if(values[i] == 'aye'){
       count++;
      }
    }
    if(count == values.length){
       return "Fire!";
    }
     return "Shiver me timbers!"
  }

  var a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'},
    b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};
  console.log(cannonsReady(b))