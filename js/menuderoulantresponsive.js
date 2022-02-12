function myFunction() {
    var x = document.getElementById("navi");

    if (x.style.opacity == 0) {
        x.style.opacity = 1;
        x.style.pointerEvents = "all";

    } else {
        x.style.opacity = 0;
        x.style.pointerEvents = "none";
        console.log("test");
        // sleep(500);

        // x.style.display = "none";
    }



    // x.style.opacity = 1;

}

function myFunction1() {

    var x = document.getElementById("prix1");
    var x1 = document.getElementById("prix");
    if (x.style.opacity==0) {
        x.style.opacity = 1;
    } else {
        x.style.opacity = 0;
    }
    if (x1.style.opacity==0) {
        x1.style.opacity = 1;
    } else {
        x1.style.opacity = 0;
    }
}