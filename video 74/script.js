let button = document.getElementById("btn");

button.addEventListener("click", () => {
    document.querySelector(".box").innerHTML = "I am CLicked";
})




// setInterval(() => {
//     let boxid = document.querySelectorAll(".box").forEach(e => {


//         let ranB = Math.floor((Math.random()) * 1000000);
//        let ranC = Math.floor((Math.random()) * 1000000);
//         let Back = `#${ranB}`;
//         let Color = `#${ranC}`;
//         e.style.backgroundColor = Back;
//         e.style.color = Color;
//         e.style.fontSize = "24px";
//     });
    
// }, 1000)


setTimeout(() => {
    let boxid = document.querySelectorAll(".box").forEach(e => {


        let ranB = Math.floor((Math.random()) * 1000000);
       let ranC = Math.floor((Math.random()) * 1000000);
        let Back = `#${ranB}`;
        let Color = `#${ranC}`;
        e.style.backgroundColor = Back;
        e.style.color = Color;
        e.style.fontSize = "24px";
    });
    
},2000)