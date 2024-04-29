
// let prom1 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a > 0.6) {
//         reject("Value is greater then 0.6");
//     } else {

//         resolve("Done");
//     }
// })

// let prom2 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a > 0.4) {
//         reject("Value is greater then 0.4");
//     } else {

//         resolve("Done2");
//     }
// })
// let prom3 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a > 0.1) {
//         reject("Value is greater then 0.1");
//     } else {

//         resolve("Done3");
//     }
// })
// let prom4 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a > 0.1) {
//         reject("Value is greater then 0.5");
//     } else {

//         resolve("Done4");
//     }
// })
// let prom5 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a > 0.9) {
//         reject("Value is greater then 0.9");
//     } else {

//         resolve("Done5");
//     }
// })

// let p3 = Promise.allSettled([prom1, prom2,prom3,prom4,prom5]);

// p3.then((e) => {
//     console.log(e);
// }).catch((e) => {
//     console.log(e);
// })


//  async function loadData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Resolved!!!");
//         },4000)
//     })
// }

async function loadData() {
   let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json();
    console.log(data);
    return data;
}
async function main(){
console.log("Getting data");
console.log("downloading all the packages");
let data =  loadData();

console.log(data);
    console.log("proessing...")
}
main();