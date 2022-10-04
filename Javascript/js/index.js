//**** object *************
// const person =  {
//     firstName: 'raj',
//     lastName: 'kumar',
//     email: 'raj@gmail.com',
//     phone: '1234568',
// };
//** js object value using .dot and brackets notation */
// document.getElementById("demo").innerHTML = `person name is ${person.firstName}${person.lastName}`; 

//************ string ***************
//************ Most used method :-length ***************

// let str = "asdhkasdfhj";
let str1 = "This |is string|";
// let str1 = "g";
// let str1 = 5;
// console.log(str.length);
// console.log(str.slice(2));

//when value is -ve than data count back side first
// console.log(str.slice(-2));
// console.log(str1.length);
// console.log(str1.slice(-14,-7));
// console.log(str1.slice(0,3));
// console.log(str1.substring(-4));
// console.log(str1.replace('string','new string'));
// console.log(str1.toUpperCase());
// console.log(str.concat(str1));
// console.log(str1.trim());
// console.log(str1.padStart(6,'x'));
// console.log(str1.padEnd(6,'x'));
// console.log(str1.toString());
// console.log(str1.padStart(6,'0'));
// console.log(str1.split(",")); //string to array conversion
// console.log(str1.split('|'));

// ***** searching *******

// console.log(str1.indexOf('is'));
// console.log(str1.in('is'));
// console.log(str1.lastIndexOf('is'));

// ****** string templates *****


// let val1 = 10.52;
// let val2 = 20.60;

// console.log(`${val1} ${val2}`);
// console.log(`total: ${(val1 * val2).toFixed(2)}`);

// let header = "Templates literal";
// let tags = ["es6","js","w3school"];

// let html = `<h2>${header}</h2><ul>`;
// for (const iterator of tags) {
//     html += `<li>${iterator}</li>`;
// }
// html += `<ul>`;
// document.getElementById('demo').innerHTML = html;


//****** function ******

// function add(a, b){
//     return c = a*b;
// }
// console.log(add(2,5));

/* const add = () => c = 5 * 3;

console.log(add()); */

//****** Number ******
// let a = "10.30";
// let b = 12.20;

// console.log(a.toString());
// console.log(a.toFixed(3));
// console.log(a.toPrecision(8));

// console.log(typeof(Number(a)));
// console.log(typeof(parseInt(a)));
// console.log(typeof(parseFloat(a)));

// ***** Array ******* 
const arr = ['volvo', 'tata','bmw','tesla'];

// console.log(arr.push('maruti'));
// console.log(arr.length);
// console.log( typeof(arr.toString()));
// console.log((arr.join(' ')));
// console.log(arr.shift());

// console.log(arr.unshift('jaguar'));
// console.log(arr.splice(1,0,'audi','thar'));
// console.log(arr);
// console.log(arr.splice(0,3));
// console.log(arr);

// * * * map using arrow function * * * 
// const array1 = [2,4,5,7];
// const map1 = array1.map(x => x * 2)
// console.log(map1);


const arr1 = [2,4,6,8,10];

// const map1 = arr1.map(myFunction);

// function myFunction(value, index, array)
// {
//     return value = value * 2;
// }
// console.log(arr1);
// console.log(map1);

////// filter \\\\\\\\\\\\
// const myArray = [10,30,40,60,100];
// const myMap = myArray.filter(ourFunction);

// function ourFunction(value){
//    return  value = value > 50;
// }
// console.log(myMap);

// const sum = arr1.reduce(sumFunction);
//  function sumFunction(total,value)
//  {
//     return total+value;
//  }
//  console.log(sum);

// ****? Date ****

const d = new Date(2022,07,08,09,05);
console.log(d.toDateString());