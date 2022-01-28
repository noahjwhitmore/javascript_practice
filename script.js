function wordBlanks(noun, adjective, verb, adverb) {
  var result = "";
  result += "I was walking around with my " + noun + ", when a " + adjective + " " + noun + " started to " + verb + " towards me very " + adverb;

  return result;
}

let phrase = wordBlanks("dog", "big", "run", "quickly");

console.log(phrase);