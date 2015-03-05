var myHeading = document.getElementById ("myHeading");

var counter = 1;

myHeading.addEventListener( "click", function() {
    var newGraf = document.createElement ("p");
    newGraf.innerHTML = "This is click " + counter;
    counter += 1;

    var wrapper = document.getElementById ("wrapper");
    wrapper.appendChild (newGraf);

});






