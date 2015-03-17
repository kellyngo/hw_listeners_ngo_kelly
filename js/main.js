var form = document.getElementById("form");

var input = document.getElementsByTagName("input").innerHTML;

form.addEventListener( "submit", submit );

function submit() {
    console.log(input);
    event.preventDefault();
}




