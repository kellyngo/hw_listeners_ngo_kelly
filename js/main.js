var send = document.getElementByClass ("send");

send.addEventListener( "click", clicked );
send.addEventListener( "click", function() {
    console.log ( "firstName" );
});

function clicked() {
    console.log ("Please Work");
}