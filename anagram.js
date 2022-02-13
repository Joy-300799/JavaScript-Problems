/* Anagram is a word which originated if we re-arrange the letters of a word and create another meaningful word. The first original word is called subject of the anagram and the word got originated after re-arranging is called anagram of that word.
*/

function anagram() {

    let splitFword = fWord.split('').sort().join('')
    let splitSword = sWord.split('').sort().join('')

    if (splitFword.length != splitSword.length) {
        return (`${fWord} and ${sWord} are not anagram words.`)
    }

    if (splitFword == splitSword) {
        return (`${fWord} and ${sWord} are anagram words.`)
    }
}

let fWord = "civic"
let sWord = "vicci"
console.log(anagram(fWord, sWord))
