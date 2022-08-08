var mainImage = document.getElementById('MainImg');
var smallerImage = document.getElementsByClassName('small-img');

smallerImage[0].onclick  = function(){
    mainImage.src = smallerImage[0].src;
}

smallerImage[1].onclick = function(){
    mainImage.src = smallerImage[1].src;
}

smallerImage[2].onclick = function(){
    mainImage.src = smallerImage[2].src;
}

smallerImage[3].onclick = function(){
    mainImage.src = smallerImage[3].src;
}


