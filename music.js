const music_list = [
    {
        title: "Deck the Halls",
        artist: "Nat King Cole",
        music: "music/Deck the Halls - Nat King Cole.mp3",
        img: "imgs/NatKingCole.jpg"
    },
    {
        title: "White Christmas (1947)",
        artist: "Bing Crosby",
        music: "music/White Christmas (1947 Version).mp3",
        img: "imgs/BingCrosby.jpg"
    },
    {
        title: "O Holy Night",
        artist: "Bing Crosby",
        music: "music/O Holy Night.mp3",
        img: "imgs/BingCrosby.jpg"
    },
    {
        title: "Little Drummer Boy",
        artist: "Bing Crosby",
        music: "music/Little Drummer Boy.mp3",
        img: "imgs/BingCrosby.jpg"
    },
    {
        title: "Jingle Bell Rock",
        artist: "Bobby Helms",
        music: "music/Jingle Bell Rock.mp3",
        img: "imgs/BobbyHelms.jpg"
    },
    {
        title: "I Want a Hippopotamus for Christmas",
        artist: "Gayla Peevey",
        music: "music/I Want a Hippopotamus for Christmas.mp3",
        img: "imgs/GaylaPeevey.jpg"
    }
]

const shuffle_music = music_list.sort((a, b) => 0.5 - Math.random());

let song = document.querySelector(".song");
let album = document.querySelector(".album");

console.log(song);
console.log(album);

let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

loadTrack(track_index);

function loadTrack(track_index) {
    clearInterval(updateTimer);

    curr_track.src = shuffle_music[track_index].music;
    curr_track.load();

    album.src = shuffle_music[track_index].img;

    song.textContent = shuffle_music[track_index].title + " by " + shuffle_music[track_index].artist;

    // updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
}

function nextTrack() {
    if (track_index < shuffle_music.length - 1) {
        track_index += 1;
    } else {
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}

function prevTrack() {
    if (track_index > 0) {
        track_index -= 1;
    } else {
        track_index = music_list.length - 1;
    }
    loadTrack(track_index);
    playTrack();
}

function playTrack() {
    curr_track.play();
    isPlaying = true;
}

function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
}

function playPause() {
    isPlaying ? pauseTrack() : playTrack();
}