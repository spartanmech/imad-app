console.log('Loaded!');
//Select the image
var img = document.getElementById('Jarvis');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft+'px';
}
img.onclick = function(){
   var interval = setInterval(moveRight,500);
}