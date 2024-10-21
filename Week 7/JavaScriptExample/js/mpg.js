let msg = "Hello World";

function showValues(miles, gallons, mpg) {
    let obj = document.getElementById("results");
    obj.innerHTML = `Miles:${miles} Gallons:${gallons} MPG:${mpg}`;
}

function outputError(msg) {
    let obj = document.getElementById("results");
    obj.innerHTML = msg;
}

function calcMPG() {
    let miles = parseFloat(document.getElementById("miles").value);
    let gallons = parseFloat(document.getElementById("gallons").value);
    if (isNaN(miles) || isNaN(gallons)) {
        msg = "Error Miles or Gallons NaN";
        outputError(msg);
    }
    else if (miles < 0 || gallons < 0) {
        msg = "Error Miles or Gallons negative";
        outputError(msg);
    }
    else {
        let mpg = miles/gallons;
        showValues(miles, gallons, mpg)
    }
}