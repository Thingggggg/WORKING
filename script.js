const songs = [
  {
    name: "1 - Chill",
    src: "https://lambda.vgmtreasurechest.com/soundtracks/restaurant-tycoon-2-roblox-gamerip-2021/bchfeelt/01.%20Classical.mp3",
    class: "chill"
  },
  {
    name: "2 - Restaurant",
    src: "https://lambda.vgmtreasurechest.com/soundtracks/restaurant-tycoon-2-roblox-gamerip-2021/adomsbgb/08.%20Slow%20Piano.mp3",
    class: "restaurant"
  },
  {
    name: "3 - Ocean 🌊",
    src: "https://nu.vgmtreasurechest.com/soundtracks/fortnite-music-packs-gamerip-2017/iyrrfbre/1-08.%20Coral%20Chorus.mp3",
    class: "ocean"
  }
];

let i = 0;
let isPlaying = false;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const vinyl = document.getElementById("vinyl");
const arm = document.getElementById("arm");
const deck = document.getElementById("deck");

const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

/* LOAD SONG (REAL FIX) */
function loadSong(index){
  const song = songs[index];

  audio.pause();
  audio.currentTime = 0;

  audio.src = song.src;
  audio.load(); // 🔥 force switch

  title.textContent = song.name;

  deck.className = "deck " + song.class;
}

/* PLAY */
function playSong(){
  audio.play().then(()=>{
    isPlaying = true;
    vinyl.classList.add("spin");
    arm.classList.add("active");
    playBtn.textContent = "⏸";
  }).catch(()=>{});
}

/* PAUSE */
function pauseSong(){
  audio.pause();
  isPlaying = false;
  vinyl.classList.remove("spin");
  arm.classList.remove("active");
  playBtn.textContent = "▶";
}

/* BUTTONS */
playBtn.onclick = () => {
  if(!audio.src) loadSong(i);

  if(isPlaying){
    pauseSong();
  } else {
    playSong();
  }
};

nextBtn.onclick = () => {
  i = (i + 1) % songs.length;
  loadSong(i);
  playSong();
};

prevBtn.onclick = () => {
  i = (i - 1 + songs.length) % songs.length;
  loadSong(i);
  playSong();
};

/* AUTO NEXT */
audio.onended = () => {
  i = (i + 1) % songs.length;
  loadSong(i);
  playSong();
};
