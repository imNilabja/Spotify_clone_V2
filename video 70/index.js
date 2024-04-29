
let boxid = document.querySelectorAll("#box1").forEach(e => {


    let ranB = Math.floor((Math.random()) * 1000000);
   let ranC = Math.floor((Math.random()) * 1000000);
    let Back = `#${ranB}`;
    let Color = `#${ranC}`;
    e.style.backgroundColor = Back;
    e.style.color = Color;
    e.style.fontSize = "24px";
});
