const myNums =[1,2,3]
const myTotal =myNums.reduce(function (acc,currval){
    console.log(`accumulator :${acc} and current value ${currval}`);
    //accumulator blank emplty variableis cureent value is current value of array
    return acc +currval
},0)
// const myTotal = myNums.reduce( (acc,curr) =>acc+curr,0)
console.log(myTotal);


const shoppingCart =[
    {
        itemName:"js course",
        price :2999
    },
    {
        itemName:"py course",
        price :999
    },
    {
        itemName:"mobile dev course",
        price :5999
    },
    {
        itemName:"data science course",
        price :12999
    },
    {
        itemName:"js course",
        price :2999
    },
]

shoppingCart.reduce( (acc,item)=>acc +item.price,0)
console.log(shoppingCart);