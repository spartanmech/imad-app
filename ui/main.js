// button config
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    //Make a request to the counter endpoint
    //that is clicking
    
    //caputre the response and store it in a variable
    
    // Render/display the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}