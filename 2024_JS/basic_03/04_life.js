//immediately invoked function expression (IIFE)

(function chai(){
    console.log(`DB COONECTED`);
    //named IIFI
})(); //two if used in one file then usedsemicon end of the first if

(  (name) =>{
    console.log(`DB COONECTED TWO ${name}`);
})('hitesh')
