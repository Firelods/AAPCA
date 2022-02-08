

function myFunction() {
    var x = document.getElementById("navi");

        if (x.style.opacity == 0) {
            x.style.opacity = 1;
            x.style.pointerEvents="all";
            
        } else {
            x.style.opacity = 0;
            x.style.pointerEvents="none";
            console.log("test");
            // sleep(500);
            
            // x.style.display = "none";
        }

    

        // x.style.opacity = 1;
    
}