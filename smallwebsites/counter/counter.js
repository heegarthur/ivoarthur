let count = sessionStorage.getItem("count");

if (count === null) {
    count = 0;
    sessionStorage.setItem("count", count);
}

document.getElementById("count").innerText = count;

function pluscounter() {
    let count = parseInt(sessionStorage.getItem("count"));
    count++;
    sessionStorage.setItem("count", count);
    document.getElementById("count").innerText = count;
}


function mincounter() {
    let count = parseInt(sessionStorage.getItem("count"));
    count = count-1;
    sessionStorage.setItem("count", count);
    document.getElementById("count").innerText = count;
}