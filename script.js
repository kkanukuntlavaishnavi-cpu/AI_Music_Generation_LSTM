function generateMusic() {
    const musicList = [
        "music/music1.mp3",
        "music/music2.mp3",
        "music/music3.mp3"
    ];

    const randomMusic = musicList[Math.floor(Math.random() * musicList.length)];

    const audio = document.getElementById("audioPlayer");
    audio.src = randomMusic;

    audio.play().catch(err => {
        alert("Click again to play audio (browser blocked autoplay)");
        console.log(err);
    });

    document.getElementById("status").innerText =
        "Now playing: " + randomMusic;
}