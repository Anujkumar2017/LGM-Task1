var slideIndex=0;

function changeImage(n){
    if(n==100){
        slideIndex++;
        if (slideIndex > 4) 
            slideIndex = 1;
        n=slideIndex;
    }else{
        slideIndex=n;
    }
    var imgArray = ["image/coconut.jpg","image/butterfly.jpg","image/bird.jpg","image/leaf.jpg"];
    var container= document.getElementById("slideshow_container");
    var dots = document.getElementsByClassName("dot");
    container.style.backgroundImage="url("+imgArray[n-1]+")";
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n-1].className += " active";
}

setInterval(changeImage, 5000,100);



