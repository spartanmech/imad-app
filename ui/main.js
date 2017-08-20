console.log('Loaded!');
//Select the image
var img = document.getElementById('Jarvis');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft+'px';
}
img.onclick = function(){
    img.style.marginLeft = '100px';
}