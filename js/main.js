var myHeading = document.getElementById ("myHeading");

var counter = 1;

function add () {
     return counter += 1;
}

myHeading.addEventListener( "click", function() {
    var newGraf = document.createElement ("p");
    newGraf.innerHTML = "This is click " + counter;
    add();

    var wrapper = document.getElementById ("wrapper");
    wrapper.appendChild (newGraf);

});






