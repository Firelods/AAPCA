
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
function myFunction() {
    var x = document.getElementById("navi");

    if (x.style.display === "block") {
        x.style.opacity = 0;
        // sleep(500);
        // x.style.display = "none";

    } else {

        x.style.display = "block";
        x.style.opacity = 1;
    }
}