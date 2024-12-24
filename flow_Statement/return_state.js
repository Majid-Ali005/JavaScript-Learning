//program to return the product of a and b

function Product(a,b)
{
    return a * b;
}
console.log(Product(6,10));


//this both function are return the undefine because they don't have any type of value or in one function return
function fun1() {  }
function fun2() { return }

console.log(fun1());
console.log(fun2());

// return multiple value

function Language() {
    let first = 'HTML',
        second = 'CSS',
        Third = 'Javascript'
    return {
        first,
        second,
        Third
    };
}
let { first, second, Third } = Language();
console.log(first);
console.log(second);
console.log(Third);