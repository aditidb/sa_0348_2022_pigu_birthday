let masterPlay = new Audio('../audio/birthday.mp3');
let elementD = document.getElementById('container');
elementD.addEventListener('click',()=>{
    if(masterPlay.paused || masterPlay.currentTime<=0){
        masterPlay.play();
    }
    else{
        masterPlay.pause();
    }
})


