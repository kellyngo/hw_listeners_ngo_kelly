var form = document.getElementById("form");

form.addEventListener( "submit", submit );

function submit(event) {
    event.preventDefault();

    console.log( "The first name is: " + document.getElementById("firstName").value );
    console.log( "The last name is: " + document.getElementById("lastName").value );
    console.log( "The email is: " + document.getElementById("email").value );
    console.log( "The message is: " + document.getElementById("message").value );
}




