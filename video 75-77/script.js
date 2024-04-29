function callback(script,callback2) {
    alert(script.src);
    script.onload=callback2(script)
}
function callback2(script) {
    alert(script.src);
}


function load(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    src.onload =callback(script,callback2);
    document.head.append(script);
}

load("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);