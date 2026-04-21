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

/* CREATE RECORD */
const record = document.createElement("div");
record.className = "record";
document.getElementById("jukebox").appendChild(record);

function loadSong(){
  audio.pause();
  audio.src = songs[i].src;
  audio.load();

  title.textContent = songs[i].name;

  jukebox.className = "jukebox " + songs[i].color;

  record.classList.remove("playing");
}

function playSong(){
  audio.play().catch(()=>{});
  record.classList.add("playing");
}

function pauseSong(){
  audio.pause();
  record.classList.remove("playing");
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
