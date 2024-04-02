const img = document.getElementsByClassName("container");
var index = 0;

function getNextImage() {
    if (index < 4)
        document.getElementById("currentImg").src = img[index++].src;
    else
        alert("no more images")


}

function getPrevImage() {
    if (index < 4 && index >= 0)
        document.getElementById("currentImg").src = img[index--].src;
    else
        alert("no more images")
}