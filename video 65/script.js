// let a = prompt("Enter the number:");
// let prod = 1;
// while (a >= 1) {
//     prod *= a;
//     a--;
// }

// console.log(prod);

let num = 2;
function fact(num) {
    let arr = Array.from(Array(num + 1).keys())
    console.log(arr.slice(1,));
    let c = arr.slice(1,).reduce((a, b) => {
        return a * b;
    })

    console.log(c)
}


fact(num);