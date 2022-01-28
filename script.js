var theArray = ["Stimpson", "J", "cat"];

// Push item to array
theArray.push(["happy", "happy", "joy", "joy"]);

console.log(theArray);

// Pop to remove last item, the item removed is returned
var removedFromArray = theArray.pop();

console.log("removed", removedFromArray);
console.log("the array that's left", theArray);