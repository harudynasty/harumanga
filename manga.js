function imgloader(fileInput){
    let location = document.getElementById('locationInput').value;
    let files = fileInput.files;
    let i=0;
    let interval = setInterval(function(){
        if(i < files.length){
            console.log(files.length);
            let image = document.createElement('img');
            image.src = location + String(files[i].name);
            image.className = "mangaImg";
            document.getElementById('div1').appendChild(image);
            i++;
        }else{
            $("#inputForImg").remove();
            clearInterval(interval);
        }
    },100)
}

function marginChanger(){
    let marginVal = document.getElementById("marginSelect").value;
    if(marginVal == "none"){
        $("#div1 img").css("margin-bottom", "0px");
        console.log("none");
    }else if(marginVal == "small"){
        $("#div1 img").css("margin-bottom", "5px");
        console.log("small");
    }else if(marginVal == "normal"){
        $("#div1 img").css("margin-bottom", "10px");
        console.log("normal");
    }else if(marginVal == "big"){
        $("#div1 img").css("margin-bottom", "40px");
        console.log("big");
    }
    
}

function fullscreenEnter(){
    let elem = document.documentElement;
    if(elem.requestFullscreen) {
        elem.requestFullscreen();
    }else if(elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    }else if(elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }else if(elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

function fullscreenExit(){
    if(document.exitFullscreen) {
        document.exitFullscreen();
    }else if(document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    }else if(document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }else if(document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

function fullscreen(){
    let isFullscreen;
    if(window.screenTop && window.screenY){
        isFullscreen=true;
    }else{
        isFullscreen=false;
    }
}


$(document).ready(function(){

$("#upButton").hover(
    function(){
        var intervalId = setInterval(function(){
            window.scrollBy(0, -50);
        }, 40);
        $(this).data("intervalId", intervalId);
    }, 
    function(){
        clearInterval($(this).data("intervalId"));
    }
);

$("#downButton").hover(
    function(){
        var intervalId = setInterval(function(){
            window.scrollBy(0, 50);
        }, 40);
        $(this).data("intervalId", intervalId);
    }, 
    function(){
        clearInterval($(this).data("intervalId"));
    }
);


});