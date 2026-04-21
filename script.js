const songs = [
  {
    name:"1. Chill",
    src:"https://lambda.vgmtreasurechest.com/soundtracks/restaurant-tycoon-2-roblox-gamerip-2021/bchfeelt/01.%20Classical.mp3",
    color:"chill"
  },
  {
    name:"2. Restaurant",
    src:"https://lambda.vgmtreasurechest.com/soundtracks/restaurant-tycoon-2-roblox-gamerip-2021/adomsbgb/08.%20Slow%20Piano.mp3",
    color:"restaurant"
  },
  {
    name:"3. Ocean",
    src:"https://nu.vgmtreasurechest.com/soundtracks/fortnite-music-packs-gamerip-2017/iyrrfbre/1-08.%20Coral%20Chorus.mp3",
    color:"ocean"
  },
  {
    name:"4. Minecraft",
    src:"https://dn710204.ca.archive.org/0/items/08-minecraft_202302/08%20-%20Minecraft.mp3",
    color:"minecraft"
  }
];

let i = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const jukebox = document.getElementById("jukebox");

function loadSong(){
  audio.pause();
  audio.src = songs[i].src;
  audio.load();

  title.textContent = songs[i].name;

  // APPLY GLOW
  jukebox.className = "jukebox " + songs[i].color;
}

function playSong(){
  audio.play().catch(()=>{});
}

function pauseSong(){
  audio.pause();
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
