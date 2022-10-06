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

// const d = new Date(2022,07,08,09,05);
// console.log(d.toDateString());

// const students = ['Ram','Dev','Ajay','Abhay'];
    // for(i=0;i<students.length; i++)
    // {
    //     console.log(students[i]);
    // }

    // for (const item of students) {
    //     console.log(item);
    // }
// const person ={firstName:'Rohit',age:24,address:'msmd'}

// for(value in person)
// {
//     console.log(person[value]);   
// }

var i=0;
// while (i<10) {
//     console.log(`the value of i is: ${i}`);
//     i++;
// }

// do {
//     console.log(`the value of i is: ${i}`);
//     i++;
// } while (i<5);

//***** Set*******

// const latters = new Set(['a','b','c','d']);
// console.log(latters);

// const latters = new Set();
// latters.add('a');
// latters.add('b');
// latters.add('c');
// latters.delete('c');
// console.log(latters);
// console.log(latters.size);

// const mySet = new Set();
// const mySet = new Set([1,2,6,8]);

// for (const item of mySet) {
//     console.log(item);
// }
//***** Map *******
// const myMap = new Map([
//     ['apples',100],
//     ['mangos',200],
//     ['bananas',300],
// ]);
// console.log(myMap.values());

const myMap = new Map();

myMap.set('apples',200);
myMap.set('bananas',300);
// console.log(myMap.get('apples'));
// console.log(myMap.get('bananas'));

// for (const iterator of myMap.entries()) {
//     console.log(iterator);
// }