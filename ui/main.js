// button config
var button = document.getElementById('counter');

button.onclick = function(){
    //Make a request to the counter endpoint
    //that is clicking
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function (){
        if(request.readyState === XMLHttpRequest.DONE){
            //take action
            if(request.status === 2000){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                
            }
        }
        //No action yet
    };
    // Make the request
   request.open('GET','http://spartanhappy98.imad.hasura-app.io/counter',true)
   request.send(null);
   
}