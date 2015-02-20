var button = document.getElementsByClassName ( "button" );

button.addEventListener("click", function() {
    var newButton = document.createElement ("button");
    newButton.innerHTML = "Another Button";

    var main = document.getElementById ("main");
    main.appendChild (newButton);
});