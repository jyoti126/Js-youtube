const myObject={
    js:"javascript",
    cpp:"C++",
    rb:"Ruby",
    swift:"swift by apple"
}
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
// forin loop used with array

const programming=["js","rb","py","java","cpp"]

for(const key in programming){ //access the value of array
console.log(programming[key]);
}
const map = new Map()
map.set('IN',"India")
map.set('USA',"Unitd State of America")
map.set('FR',"France")
// console.log(map);

for(const key in map){
    console.log(key); // map is not iteratable so that we have not used the for in loop.
}