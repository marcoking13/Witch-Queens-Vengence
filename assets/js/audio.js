var hasPlayed = false;

var music_active = false;



const CreateAudioSound = (sound,type,autoPlay) => {
  var audio = document.createElement("audio");
  var source = document.createElement("source");
  source.setAttribute("type",`audio/wav`);
  source.setAttribute("src",sound);
  if(autoPlay){
    audio.autoplay = true;
  }

  audio.append(source);
  document.body.append(audio);

}


const StopOrPlayAudio = (audio,play) =>{
  if(play){
    audio.play();

  }else{

    audio.pause();

  }

}




var audio_button = document.querySelector(".audio_icon");
console.log(audio_button);


audio_button.addEventListener("click",(e)=>{

  var audioSource = document.querySelector(".game_music");
  if(!music_active){
    e.target.classList.remove("inactive");
    e.target.classList.add("active");
    music_active= true;
  }else{
    e.target.classList.remove("active");
    e.target.classList.add("inactive");
    music_active=false;
  }
  StopOrPlayAudio(audioSource,music_active);
})