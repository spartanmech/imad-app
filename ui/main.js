// button config
var button = document.getElementById('counter');
button.onclick = function(){
    //Make a request to the counter endpoint
    //that is clicking
    
    //caputre the response and store it in a variable
    
    // Render/display the variable in the correct span
    counter = counter+1;
    var span = document.getElementById('count');
    span.inHTML = count.toString();
}