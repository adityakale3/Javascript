/*
sort()          slice()         find()          map()
reverse ()      splice()        findIndex()     Array Destructuring
pop()           isArray()       filter()  
push()          indexOf()       forEach()
shift()         lastIndexOf()   toString()
unshift()       includes()      valueOf()
concat()        some()          fill()
join()          every()         entries()
*/

var arr = ["Aditya","Atharva","Anushri","Sahil","Ketki"];

/* sort()  */
console.log('sort()        : ',arr.sort());
// Arranges the elements of Array in Ascending order


/* reverse()  */
console.log('reverse()     : ',arr.reverse());
// Arranges the elements of Array in Descending order


/* push()  */
console.log('push()        : ',arr.push('Maithili'));
console.log(arr);
// Adds an Element at last of the Array


/* pop()  */
console.log('pop()         : ',arr.pop());
// Removes Last element of the Array


/* shift()  */
console.log('shift()       : ',arr.shift());
// Shifts the index. Basically Displays array without 1st element. Returns removed Element


/* unshift()  */
console.log('unshift()     : ',arr.unshift('Maithili'));
// Adds element at the start of the array


/* concat()  */
var arr2 = ["Rachel","Joey","Chandler","Pheobe","Monica","Ross"];
console.log('concat()      : ',arr.concat(arr2));
// Can concat as many array as possible by adding commas arr.concat(arr2,...arrn)


/* join()  */
console.log('join()        : ',arr.join(','));
// Joins all elements of array into single string, with mentioned argument



/* slice()  */
console.log('slice()       : ',arr2.slice(1,2));
console.log('slice()       : ',arr2.slice(1));
// When 2 numbers are passed, then indexed value is returned
// When single value is passed then, from that index all arrya is returned 



/* splice()  */
console.log('splice()      : ',arr2.splice(1,0,"Abhinav","Arundhati"));
console.log('splice()      : ',arr2.splice(3,1));
// console.log(arr2);
// arr.splice(index_to_start_from, delete_elements, Add_elements)



/* isArray()  */
console.log('isArray()     : ',Array.isArray(arr));
// similar to isTypeOf(), but only checks if Array, returns boolean



/* indexOf()  */
var arr3 = ["Atharva","Aditya","Anushri","Aditya","Ketki"];
console.log('indexOf()     : ',arr3.indexOf("Aditya"));
// Searches from front, returns very 1st value



/* lastIndexOf()  */
console.log('lastIndexOf() : ',arr3.lastIndexOf("Aditya"));
// same as indexOf, but searches from last


/* includes()  */
console.log('includes()    : ',arr3.includes("Aditya"));
// Searches the element, returns bollean



/* some()  */
var arr4 = [10,19,22,42,5,18];
var b = arr4.some(function(age){
            return age >= 18;
        });
console.log('some()        : ',b);
// Returns true if any value matches even single value of the array


/* every()  */
var c = arr4.every(function(ages){
    return ages >= 18;
});
console.log('every()       : ',c);
// Returns true when all elements matches the condition





/* find()  */
var c = arr4.find(function(age){
    return age >= 18;
});
console.log('find()        : ',c);
// Returns very 1st element which matches the condition



/* findIndex()  */
var c = arr4.findIndex(function(ages){
    return ages >= 18;
});
console.log('findIndex()   : ',c);
// Returns index of 1st element, which matches the condition



/* toString()  */
console.log('toString()    : ',arr.toString());
// Converts the array into comma seprated string


/* fill()  */
console.log('fill()        : ',arr.fill("Aditya"));
// Fill entire array with the passed value



/* filter()  */
var c = arr4.filter(function(ages){
    return ages >= 18;
});
console.log('filter()      : ',c);
// Returns all matching elements for the condition



/* Map()  */
var students = [ 
    {'name' : 'Aditya', age : 26 }, 
    {'name' : 'Anushri', age : 25 },     
    {'name' : 'Atharva', age : 18 }, 
    ]; 

var c = students.map(function(allData){
    return allData.name;
});
console.log('map()          : ',c);
// Used for accessing individual values of array and modify them



/* Array De-Structuring  */
var progLang = ['PHP','JS','C++','Java','Python']; 
let [prog1,prog2,prog3,prog4,prog5] = progLang; 
// Allows you to assign values to variables directly from arrya
// Change values of 2 given variables without using 3rd variable;
var a = 5;
var b = 10;
[a,b] = [b,a];
console.log('Arrya De-Structuring : ',prog1,prog2,prog3);
console.log('Arrya De-Structuring : ','A : ',a,' | B : ',b);
// Converts the array into comma seprated string