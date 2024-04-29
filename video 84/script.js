
console.log("hi there!!!");

let currentSong = new Audio();
let songs;

async function getSongs() {

    let a = await fetch("http://127.0.0.1:3000/video 84/songs/");
    let response = await a.text();
    console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1].replaceAll("%20", " "));
        }

    }
    return songs;
}

function secondsToMinutesSeconds(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = Math.round(seconds % 60); // Round the seconds

    var formattedMinutes = (minutes < 10 ? '0' : '') + minutes;
    var formattedSeconds = (remainingSeconds < 10 ? '0' : '') + remainingSeconds;

    return formattedMinutes + ':' + formattedSeconds;
}



const playMusic = (track) => {
    const playPauseButton = document.querySelector(".play_pause");
    currentSong.src = "/video 84/songs/" + track
    currentSong.play()
    playPauseButton.src = "pause.svg"
    document.querySelector(".songinfo").innerHTML = track
    document.querySelector(".songtime").innerHTML = "00:00 00:00"
    currentSong.volume = 0.7;
    document.querySelector(".range").getElementsByTagName("input")[0].target.value="0.7"
}
async function main() {




     songs = await getSongs()
    console.log(songs);
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUL.innerHTML += `<li>
        <img class="invert" src="music.svg" alt="">
        <div class="info">
            <div>${song}</div>
            <div>Nilabja</div>
        </div>
        <div class="playnow">
            <span>Play Now</span>
            <img class="invert" src="play.svg" alt="">
        </div>
       
    </li>`
    }

    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector("div").firstElementChild.innerHTML.trim());
            playMusic(e.querySelector("div").firstElementChild.innerHTML.trim());
        })

    });

    const playPauseButton = document.querySelector(".play_pause");
    playPauseButton.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            playPauseButton.src = "pause.svg"
        } else {
            currentSong.pause();
            playPauseButton.src = "play.svg"
        }
    })

    currentSong.addEventListener("timeupdate", () => {
       // console.log(currentSong.currentTime, currentSong.duration);
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)}/${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    })

    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = ((currentSong.duration) * percent) / 100;
    });
    document.querySelector(".hamburger").addEventListener("click", e => {
        console.log("hamburger")
        document.querySelector(".left").style.left = "0%";
    })
    document.querySelector(".close").addEventListener("click", e => {
        console.log("close")
        document.querySelector(".close").style.transform = "rotateZ(-180deg)";
        document.querySelector(".close").style.opacity = ".5";

        setTimeout(() => {
            document.querySelector(".left").style.left = "-100%";
        }, 300)

    })

    document.querySelector(".previous").addEventListener("click", () => {
        console.log("prev pressed")
        let index=songs.indexOf(decodeURIComponent(currentSong.src.split("/").slice(-1)[0]))
        if (index >= 0) {
            playMusic(songs[index - 1]);
        }
  })
  document.querySelector(".next").addEventListener("click", () => {
      console.log("next pressed")
      let index=songs.indexOf(decodeURIComponent(currentSong.src.split("/").slice(-1)[0]))
      if (index <songs.length) {
          playMusic(songs[index + 1]);
      }
  })
    
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", e => {
        currentSong.volume = parseInt(e.target.value) / 100;
    })
    
}

main()