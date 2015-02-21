var button = document.getElementById ( "button" );

button.addEventListener( "click", function() { //listens for the button to be clicked
    var newButton = document.createElement ("button"); //creates a new button when the button is clicked
    newButton.innerHTML = "Another Button";

    var main = document.getElementById ("main"); //adds the new button to the section with id="main"
    main.appendChild (newButton);
});
