// for of loop
// ["","","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}
// string used in for of loop
const greeting="Hello world!"
for( const greet of greeting ) {
console.log(greet);
}

/*map used in for of loop
The map holds the key value pairs and remember the original insertion order of the key.
MAP is object
*/
const map = new Map()
map.set('IN',"India")
map.set('USA',"Unitd State of America")
map.set('FR',"France")
console.log(map);

for(const [key,value] of map){
    console.log(key,':-',value);
}
 
// for of loop used in Object
const myObj={
    'game1':'NFS',
    'game2':'Spiderman',
}
// for(const [key,value] of myObj){ //this method not use for access theobject
//     console.log(key,':-',value);
// }
