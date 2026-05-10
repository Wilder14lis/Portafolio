const audio = new Audio("src/audios/presentacion.mp3");

function reproducirAudio(){
    audio.play();
}

function detenerAudio(){
    audio.pause();
    audio.currentTime = 0;
}