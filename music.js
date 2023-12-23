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
    },
    {
        title: "Sleigh Ride",
        artist: "Harry Connick Jr.",
        music: "music/Sleigh Ride.mp3",
        img: "imgs/HarryConnickJr.jpg"
    },
    {
        title: "When My Heart Finds Christmas",
        artist: "Harry Connick Jr.",
        music: "music/When My Heart Finds Christmas.mp3",
        img: "imgs/HarryConnickJr.jpg"
    },
    {
        title: "Feliz Navidad",
        artist: "Jose Feliciano",
        music: "music/FelizNavidad.mp3",
        img: "imgs/JoseFeliciano.jpeg"
    },
    {
        title: "Let It Snow! Let It Snow! Let It Snow!",
        artist: "Dean Martin",
        music: "music/Dean Martin - Let It Snow! Let It Snow! Let It Snow! (Official Video).mp3",
        img: "imgs/DeanMartin.jpg"
    },
    {
        title: "Holly Jolly Christmas",
        artist: "Burl Ives",
        music: "music/Holly Jolly Christmas - Burl Ives - HD Audio.mp3",
        img: "imgs/BurlIves.jpg"
    },
    {
        title: "Rudolph The Red-Nosed Reindeer",
        artist: "Burl Ives",
        music: "music/Burl lves - Rudolph The Red-Nosed Reindeer (Official Video).mp3",
        img: "imgs/BurlIves.jpg"
    },
    {
        title: "Christmas (Baby Please Come Home)",
        artist: "Darlene Love",
        music: "music/Darlene Love - Christmas (Baby Please Come Home).mp3",
        img: "imgs/ChristmasGift.jpg"
    },
    {
        title: "Sleigh Ride",
        artist: "The Ronettes",
        music: "music/The Ronettes - Sleigh Ride (Official Audio).mp3",
        img: "imgs/ChristmasGift.jpg"
    },
    {
        title: "Little Saint Nick",
        artist: "The Beach Boys",
        music: "music/The Beach Boys - Little Saint Nick (Official Lyric Video).mp3",
        img: "imgs/BeachBoys.jpg"
    },
    {
        title: "Sleigh Ride",
        artist: "The Ronettes",
        music: "music/The Ronettes - Sleigh Ride (Official Audio).mp3",
        img: "imgs/ChristmasGift.jpg"
    },
    {
        title: "Imperial March x Carol of The Bells",
        artist: "Samuel Kim",
        music: "music/Imperial March x Carol of The Bells.mp3",
        img: "imgs/StarWars.png"
    },
    {
        title: "Chestnuts Roasting on an Open Fire",
        artist: "Nat King Cole",
        music: "music/Nat King Cole Chestnuts roasting on an open fire.mp3",
        img: "imgs/NatKingCole.jpg"
    },
    {
        title: "O Holy Night",
        artist: "Nat King Cole",
        music: "music/Nat King Cole - O Holy Night.mp3",
        img: "imgs/NatKingCole.jpg"
    },
    {
        title: "God Rest Ye Merry, Gentlemen",
        artist: "Nat King Cole",
        music: "music/Nat King Cole - God Rest Ye Merry, Gentlemen.mp3",
        img: "imgs/NatKingCole.jpg"
    },
    {
        title: "O Tannenbaum",
        artist: "Vince Guaraldi Trio",
        music: "music/Vince Guaraldi Trio - O Tannenbaum.mp3",
        img: "imgs/CharlieBrown.jpg"
    },
    {
        title: "What Child Is This",
        artist: "Vince Guaraldi Trio",
        music: "music/Vince Guaraldi Trio - What Child Is This.mp3",
        img: "imgs/CharlieBrown.jpg"
    },
    {
        title: "My Little Drum",
        artist: "Vince Guaraldi Trio",
        music: "music/Vince Guaraldi Trio - My Little Drum.mp3",
        img: "imgs/CharlieBrown.jpg"
    },
    {
        title: "Christmas Time Is Here",
        artist: "Vince Guaraldi Trio",
        music: "music/Vince Guaraldi Trio - Christmas Time Is Here.mp3",
        img: "imgs/CharlieBrown.jpg"
    },
    {
        title: "Linus and Lucy",
        artist: "Vince Guaraldi Trio",
        music: "music/Vince Guaraldi Trio - Christmas Time Is Here.mp3",
        img: "imgs/CharlieBrown.jpg"
    },
    {
        title: "Christmas Time Is Here",
        artist: "Vince Guaraldi Trio",
        music: "music/Vince Guaraldi Trio - Linus And Lucy.mp3",
        img: "imgs/CharlieBrown.jpg"
    },
    {
        title: "Rockin' Around the Christmas Tree",
        artist: "Brenda Lee",
        music: "music/Rockin' Around the Christmas Tree.mp3",
        img: "imgs/BrendaLee.jpg"
    },
    {
        title: "It's the Most Wonderful Time of the Year",
        artist: "Andy Williams",
        music: "music/Andy Williams - It's the Most Wonderful Time of the Year (Official Audio).mp3",
        img: "imgs/AndyWilliams.jpg"
    },
    {
        title: "Here Comes Santa Claus",
        artist: "Gene Autry",
        music: "music/Here Comes Santa Claus - (Right Down Santa Claus Lane) (Audio)",
        img: "imgs/GeneAutry.jpg"
    },
    {
        title: "Mele Kalikimaka",
        artist: "Bing Crosby, The Andrews Sisters",
        music: "music/Bing Crosby, The Andrews Sisters - Mele Kalikimaka.mp3",
        img: "imgs/BingCrosby.jpg"
    },
    {
        title: "Frosty the Snowman",
        artist: "The Ronettes",
        music: "music/The Ronettes - Frosty the Snowman (Official Lyric Video).mp3",
        img: "imgs/ChristmasGift.jpg"
    },
    {
        title: "Caroling, Caroling",
        artist: "Nat King Cole",
        music: "music/Nat King Cole - Caroling, Caroling (Lyric Video).mp3",
        img: "imgs/NatKingCole.jpg"
    },
    {
        title: "Do You Hear What I Hear",
        artist: "Bing Crosby",
        music: "music/Bing Crosby - Do You Hear What I Hear_ (Lyric Video).mp3",
        img: "imgs/BingCrosby.jpg"
    },
    {
        title: "Happy Holidays / Holiday Season",
        artist: "Andy Williams",
        music: "music/Andy Williams - Happy Holiday  The Holiday Season (Official Audio).mp3",
        img: "imgs/AndyWilliams.jpg"
    },
    {
        title: "Silver Bells",
        artist: "Bing Crosby",
        music: "music/Bing Crosby - Silver Bells (Visualizer) ft. Carol Richards.mp3",
        img: "imgs/BingCrosby.jpg"
    },
    {
        title: "(There's No Place Like) Home for the Holidays",
        artist: "Perry Como",
        music: "music/Perry Como - (There's No Place Like) Home for the Holidays (Official Audio).mp3",
        img: "imgs/PerryComo.jpg"
    },
    {
        title: "O Come All Ye Faithful",
        artist: "Nat King Cole",
        music: "music/Nat King Cole - O Come All Ye Faithful (Official Music Video).mp3",
        img: "imgs/NatKingCole.jpg"
    },
    {
        title: "The First Noël",
        artist: "Andy Williams",
        music: "music/The First Noël.mp3",
        img: "imgs/AndyWilliams.jpg"
    },
    {
        title: "Baby, It's Cold Outside",
        artist: "Dean Martin",
        music: "music/Dean Martin - Baby, It's Cold Outside (Lyric Video).mp3",
        img: "imgs/DeanMartin.jpg"
    },
    {
        title: "O Little Town of Bethlehem",
        artist: "Nat King Cole",
        music: "music/Nat King Cole - O Little Town Of Bethlehem (Lyric Video).mp3",
        img: "imgs/NatKingCole.jpg"
    },
    {
        title: "I'll Be Home For Christmas",
        artist: "Bing Crosby",
        music: "music/Bing Crosby - I'll Be Home For Christmas (Visualizer).mp3",
        img: "imgs/BingCrosby.jpg"
    },
    {
        title: "Mistletoe And Holly",
        artist: "Frank Sinatra",
        music: "music/Frank Sinatra - Mistletoe And Holly (Official Video).mp3",
        img: "imgs/FrankSinatra.jpg"
    },
    {
        title: "O Christmas Tree",
        artist: "Tony Bennett",
        music: "music/Tony Bennett - O Christmas Tree (from A Swingin' Christmas).mp3",
        img: "imgs/TonyBennett.jpg"
    },
    {
        title: "Twelve Days of Christmas",
        artist: "Bing Crosby, The Andrews Sisters",
        music: "music/Bing Crosby & The Andrews Sisters - The Twelve Days Of Christmas.mp3",
        img: "imgs/BingCrosby.jpg"
    },
    {
        title: "Hark! The Herald Angels Sing",
        artist: "Frank Sinatra",
        music: "music/Frank Sinatra - Hark! The Herald Angels Sing (Visualizer).mp3",
        img: "imgs/FrankSinatra.jpg"
    },
    {
        title: "All I Want For Christmas (Is My Two Front Teeth)",
        artist: "Nat King Cole Trio",
        music: "music/Nat King Cole Trio - All I Want For Christmas (Is My Two Front Teeth) (Visualizer).mp3",
        img: "imgs/NatKingCole.jpg"
    },
    {
        title: "Silent Night",
        artist: "Frank Sinatra",
        music: "music/Frank Sinatra - Silent Night (Visualizer).mp3",
        img: "imgs/FrankSinatra.jpg"
    },
    {
        title: "Run Rudolph Run",
        artist: "Chuck Berry",
        music: "music/Chuck Berry - Run Rudolph Run (Official Video).mp3",
        img: "imgs/ChuckBerry.jpg"
    },
    {
        title: "This Christmas",
        artist: "Donny Hathaway",
        music: "music/Donny Hathaway - This Christmas (Official Audio).mp3",
        img: "imgs/DonnyHathaway.jpg"
    },
    {
        title: "Have Yourself A Merry Little Christmas",
        artist: "Michael Bublé",
        music: "music/Michael Bublé - Have Yourself A Merry Little Christmas [Official HD].mp3",
        img: "imgs/MichaelBuble.png"
    }
]

console.log("Total Songs: " + music_list.length);

const shuffle_music = music_list.sort((a, b) => 0.5 - Math.random());  //  Shuffle the music order on site load

let song = document.querySelector(".song");
let album = document.querySelector(".album");

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