var form = document.getElementById ("form");

var input = document.getElementsByTagName("input");

form.addEventListener( "submit", function() {
    event.preventDefault();
    console.log(input.text);
});





