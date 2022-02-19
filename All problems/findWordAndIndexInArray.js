/* 
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:
*/

let index;
function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == "needle") {
            index = i
            // index = haystack.indexOf("needle")
            return ("found the needle at position " + index)
        }
        else {
            return("needle not found")
        }
        // break;
    }
    return;
}
console.log(findNeedle(["joy", "hoy", "toy", "mug", "jug", "needle"]))
