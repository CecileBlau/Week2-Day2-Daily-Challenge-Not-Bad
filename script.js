

let sentence = "He is not bad, he is nice";


//----------------NOT----------------
let indexOfNot = sentence.indexOf("not");
//console.log(indexOfNot) = 6 and since "not" has 3 letters, then its index would be from position 6 until position 9
let wordNot = sentence.substring(6,9)
//console.log(wordNot)




//-----------------BAD-----------------
let indexOfBad = sentence.indexOf("bad");
//console.log(indexOfBad) = 10 and since "bad" has 3 letters, then its index would be from position 10 until position 13
let wordBad = sentence.substring(10,13)
//console.log(wordBad)





//---------------FINAL SENTENCE-----------
if (indexOfNot<indexOfBad){
	console.log(sentence.replace("not bad", "good"))
}
else{
	console.log(sentence)
}