var arr = [
    {songName: "Husn", time: "2:06", url:"./song/husn song.mp3", img:"https://i.scdn.co/image/ab67616d0000b2730d3449f333a83a25feb423f8"},
    {songName: "All You Had To Do Was Stay", time: "3:17", url:"./song/taylor.mp3", img:"https://tse1.mm.bing.net/th/id/OIP.b59vY2WCtphDx-mfJzb2DAAAAA?r=0&w=440&h=440&rs=1&pid=ImgDetMain&o=7&rm=3"},
    {songName: "Run BTS", time: "3:01", url:"./song/run bts.mp3",img:"https://bts613-bighit.com/wp-content/uploads/2022/11/35BE5C7F-0E41-4B60-A709-88AF9842C73E-1536x1152.jpeg"},
    {songName: "Hum Tere Pyar Mein", time: "2:56", url:"./song/lata song.mp3",img:"https://th.bing.com/th/id/OSK.lFK6551glTLmtEPBdkrZXkD2ynP0Q5yWLjcJtsQ6qmM?w=102&h=102&c=7&o=6&dpr=1.3&pid=SANGAM"}
];

var allSongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");

var play = document.querySelector("#play");
var backward = document.querySelector("#back");
var forward = document.querySelector("#forward");

var audio = new Audio();
var selectedSong = 0;
var flag = 0;


function mainFunction(){
    var clutter = "";
    arr.forEach(function(elem,index){
    clutter = clutter + `<div class="song-card" id="${index}">
                    <div id="part1">
                        <img class="image" src="${elem.img}" alt="">
                        <h2>${elem.songName}</h2>
                    </div>
                    <h6>${elem.time}</h6>
                </div>`
});
allSongs.innerHTML = clutter;

audio.src = arr[selectedSong].url;
poster.style.backgroundImage = `url(${arr[selectedSong].img})`;

//update current song title
var currentSongTitle = document.querySelector("#currentSongTitle");
currentSongTitle.textContent = arr[selectedSong].songName;

}
mainFunction();

// allSongs.addEventListener("click", function(details){
    // selectedSong = details.target.id
    // mainFunction();
    // play.innerHTML = `<i class="ri-pause-circle-line"></i>`
    // flag = 1
    // audio.play();
    allSongs.addEventListener("click", function(details){
        var card = details.target.closest(".song-card");
        if (card) {
            selectedSong = card.id;
            mainFunction();
            play.innerHTML = `<i class="ri-pause-circle-line"></i>`;
            flag = 1;
            audio.play();
        }
    });

play.addEventListener("click", function(){
    if(flag == 0){
       play.innerHTML = `<i class="ri-pause-circle-line"></i>`
       mainFunction()
       audio.play()
       flag = 1
    }
    else{
        play.innerHTML = `<i class="ri-play-fill"></i>`
        mainFunction();
        audio.pause();
        flag = 0
    }
})

forward.addEventListener("click",function(){
    if(selectedSong < arr.length-1){
        selectedSong++
        mainFunction();
        audio.play();
        flag = 1;
        play.innerHTML = `<i class="ri-pause-circle-line"></i>`;
    }
    else{
        forward.style.opacity = 0.4
    }
})
backward.addEventListener("click",function(){
    if(selectedSong > 0){
        selectedSong--
        mainFunction();
        audio.play();
        flag = 1;
        play.innerHTML = `<i class="ri-pause-circle-line"></i>`;
    }
    else{
        backward.style.opacity = 0.4
        mainFunction()
        // audio.pause()
    }
})

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
});
