
const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve()
        }, timeout * 1000)
    })
}

const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");

    div.innerHTML = item;

    document.querySelector(".container").append(div);

}


async function main() {
    let arr = ["Reading You files", "Password files detected", "Sending all password and personal files to the server", "cleaning up"];

    setInterval(() => {
        let last = document.querySelector(".container").lastElementChild;
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        } else {
            last.innerHTML = last.innerHTML + ".";
        }
    }, 700)





    for (let item of arr) {
        await addItem(item);
    }

}

main()