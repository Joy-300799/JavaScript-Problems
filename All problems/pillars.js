/* There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

 => number of pillars (≥ 1);
 => distance between pillars (10 - 30 meters);
 => width of the pillar (10 - 50 centimeters).
 
 Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar). */

 function pillars(pillNum, dist, width) {
     if(pillNum <=1){
         return 0;
        }
        if(pillNum >1){
            result = pillNum * ((dist * 100) + width) - (width * 2) - (dist * 100);
        }     
        return result;
 }
let result;
 console.log(pillars (2,20,25))

 //output - 2000

 