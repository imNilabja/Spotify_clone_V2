function createCard(titl,cName,views,monthsOld,duration) {
    let mainDiv = document.createElement("div");

    mainDiv.className = "maincontainer";
    
    mainDiv.style.border = "2px solid black"
    mainDiv.style.borderRadius = "10px";
    mainDiv.style.backgroundColor="#45423F"
    mainDiv.style.height = "110px";
    mainDiv.style.width = "70vw";
    mainDiv.style.display = "flex";
    mainDiv.style.justifyContent="space-around"
    document.querySelector(".container").prepend(mainDiv);
    
    //
    let img = document.createElement("img");
    img.src="https://i.ytimg.com/vi/CO_DAXswOrc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB19wZ1Xom2N5iWreyZPUh7UXs2gA"
    document.querySelector(".maincontainer").appendChild(img);
    img.style.margin = "1px";
    img.style.padding = "2px";
    img.id = "image";
    img.style.border = "2px solid black"
    img.style.position = "relative"
    img.style.zIndex="-10px"
    img.style.borderRadius = "10px";
    //

    
    // let dura = document.createElement("p");
    // dura.innerHTML = `10:00`;
    // document.querySelector(".maincontainer").append(dura);
    // dura.style.zIndex = "10"
    // dura.style.color="black"
    // dura.style.fontSize="10px"
    // dura.style.position = "relative"
    // dura.style.left="140px"
    // dura.style.top = "-35px"
    // dura.style.width="30px"
    // dura.style.backgroundColor = "gray"
    // dura.style.borderRadius = "10px";

    //

    let title = document.createElement("div");
    title.innerHTML = titl;
    document.querySelector(".maincontainer").append(title);
    title.style.marginTop = "10px";
    title.style.marginLeft = "0px";
    title.style.fontSize = "20px"
    title.style.fontWeight = "bold"
    title.style.color="white"
    
    let cN = document.createElement("div");
    cN.innerHTML = `${cName} | ${views} | ${monthsOld}`;
    document.querySelector(".maincontainer").append(cN);
    cN.style.marginTop = "10px";
    cN.style.marginLeft = "0px";
    cN.style.position="relative"
    cN.style.fontSize = "20px"
    cN.style.fontWeight = "400"
    cN.style.left = "-500px"
    cN.style.top="30px"
    cN.style.fontSize="12px"
    cN.style.color="#CEC8C2"
}

createCard("JavaScript Exercise 13 - Dynamic Website Builder","CodeWithHarry","342434k","34 months","10:14");
createCard("JavaScript Exercise 13 - Dynamic Website Builder","CodeWithHarry","342434k","34 months","10:14");

createCard("JavaScript Exercise 13 - Dynamic Website Builder","CodeWithHarry","342434k","34 months","10:14");

createCard("JavaScript Exercise 13 - Dynamic Website Builder","CodeWithHarry","342434k","34 months","10:14");

createCard("JavaScript Exercise 13 - Dynamic Website Builder","CodeWithHarry","342434k","34 months","10:14");

createCard("JavaScript Exercise 13 - Dynamic Website Builder","CodeWithHarry","342434k","34 months","10:14");

createCard("JavaScript Exercise 13 - Dynamic Website Builder","CodeWithHarry","342434k","34 months","10:14");
createCard("JavaScript Exercise 13 - Dynamic Website Builder","CodeWithHarry","342434k","34 months","10:14");



