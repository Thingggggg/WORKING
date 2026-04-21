const songs = [
  {
    name:"Chill",
    src:"https://lambda.vgmtreasurechest.com/soundtracks/restaurant-tycoon-2-roblox-gamerip-2021/bchfeelt/01.%20Classical.mp3",
    color:"chill"
  },
  {
    name:"Restaurant",
    src:"https://lambda.vgmtreasurechest.com/soundtracks/restaurant-tycoon-2-roblox-gamerip-2021/adomsbgb/08.%20Slow%20Piano.mp3",
    color:"restaurant"
  },
  {
    name:"Ocean",
    src:"https://nu.vgmtreasurechest.com/soundtracks/fortnite-music-packs-gamerip-2017/iyrrfbre/1-08.%20Coral%20Chorus.mp3",
    color:"ocean"
  },
  {
    name:"Minecraft",
    src:"https://dn710204.ca.archive.org/0/items/08-minecraft_202302/08%20-%20Minecraft.mp3",
    color:"minecraft"
  }
];

let i = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const vinyl = document.getElementById("vinyl");

function loadSong(){
  audio.pause();
  audio.src = songs[i].src;
  audio.load();

  title.textContent = songs[i].name;

  vinyl.className = "vinyl " + songs[i].color;
  vinyl.style.animationPlayState = "paused";
}

function playSong(){
  audio.play().catch(()=>{});
  vinyl.style.animationPlayState = "running";
}

function pauseSong(){
  audio.pause();
  vinyl.style.animationPlayState = "paused";
}

function next(){
  i = (i+1) % songs.length;
  loadSong();
}

function prev(){
  i = (i-1+songs.length) % songs.length;
  loadSong();
}

loadSong();
