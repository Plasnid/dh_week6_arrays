console.log("Hey, its sunny above cloud level!");

let kaiju2 = "Godzilla";
let kaiju = "Gamera";

console.log(`${kaiju} is going to beat ${kaiju2}`);

let tiredDueToAssigment = true;

let hoursOfSleep = 0.25;

let sushi = {
    rollName: "swimming beef roll",
    wrap: "nori",
    numPieces: 6,
    ingredients: ["avocado","beef teriyaki","tempura","mayo"]
};

console.log(sushi.ingredients);
sushi.ingredients.push("bonito flakes");
sushi.ingredients.push("ketchup");
console.log(sushi.ingredients);
sushi.ingredients.unshift("rice");
sushi.ingredients.unshift("dulce du leche");
console.log(sushi.ingredients);
//lets remove the dulce du leche
sushi.ingredients.shift();
console.log(sushi.ingredients);
//getting rid of the ketchup
sushi.ingredients.pop();
console.log(sushi.ingredients);
//checking on the length of the array
console.log(`my array is this long: ${sushi.ingredients.length}`);
for(let i=0;i<sushi.ingredients.length;i++){
    console.log(sushi.ingredients[i]);
}
//switching the beef for lamb
//array.splice(whereToAdd, howManyToRemove, what to add)
sushi.ingredients.splice(2,1,"Lamb Teriyaki");
console.log(sushi.ingredients);
//concatenating extra ingredients
let extraFish = ["salmon","butter fish", "kingfish", "peasant fish"];
let weirdSushi = sushi.ingredients.concat(extraFish);
console.log(weirdSushi);
let reverseWeirdSushi = extraFish.concat(sushi.ingredients);
console.log("check out the weird sushi");
console.log(reverseWeirdSushi);

//slice happening here
console.log("\n\nslice here!");
console.log(sushi.ingredients);
let slicedArray = sushi.ingredients.slice(2,6);
console.log(slicedArray);

//delete the tempura
delete slicedArray[1];

//join array here
let arrString = slicedArray.join("-");
console.log(arrString);

/*
function orderSushi(foodOrder,numOrders,faveChef){
    console.log("Time to order some sushi, while watching the kaiju fight");
    console.log(`I want ${numOrders} of ${foodOrder.rollName} from ${faveChef}`);
    console.log(foodOrder);
}
orderSushi(sushi,2,"Stan");
*/