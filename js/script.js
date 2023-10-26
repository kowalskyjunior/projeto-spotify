var audioPlayer = document.getElementById('audioplayer');
var loaded = false;
var playBtn = document.getElementById('playBtn');
var pauseBtn = document.getElementById('pauseBtn');

pauseBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    playBtn.style.display = 'inline';
    pauseBtn.style.display = 'none';
    audioPlayer.pause();
    return false;
});

playBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
    audioPlayer.play();
    return false;
});

/* const playSong = (file) => {

    if(loaded == false){
        audioPlayer.innerHTML = `<source src="`+file+`" type="audio/mp3" />`;
        loaded = true;
    }

    audioPlayer.play();

    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
} */

document.querySelectorAll('.main-col-my-guns').forEach(item =>{

    item.addEventListener('click', event=>{
        const playSong = (file) => {        
            audioPlayer.innerHTML = `<source src="audio/music.mp3" type="audio/mp3" />`;
            loaded = true;
            audioPlayer.load();
            audioPlayer.play();
    
            playBtn.style.display = 'none';
            pauseBtn.style.display = 'inline';
        } 

        let image = item.getAttribute('data-image');
        let artist = item.getAttribute('data-artist');
        let song = item.getAttribute('data-song');
        let file = item.getAttribute('data-file');


        let playArtistComponent = document.getElementsByClassName('player-artist')

        playArtistComponent[0].innerHTML = `<img src="`+image+`" />
        <div class="artist-name">
            <p>`+artist+`</p>
            <br>
            <p>`+song+`</p>
        </div>
            `;
        
        playSong(file);

    })
});

document.querySelectorAll('.main-col-my-rocky').forEach(item =>{

    const playSong = (file) => { 
        audioPlayer.innerHTML = `<source src="audio/music02.mp3" type="audio/mp3" />`;
        loaded = true;
        audioPlayer.load();
        audioPlayer.play();
    
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline';
    } 
    item.addEventListener('click', event=>{
        let image = item.getAttribute('data-image');
        let artist = item.getAttribute('data-artist');
        let song = item.getAttribute('data-song');
        let file = item.getAttribute('data-file');


        let playArtistComponent = document.getElementsByClassName('player-artist')

        playArtistComponent[0].innerHTML = `<img src="`+image+`" />
        <div class="artist-name">
            <p>`+artist+`</p>
            <br>
            <p>`+song+`</p>
        </div>
            `;
        
        playSong(file);
    })
});

document.querySelectorAll('.main-col-my-hungria').forEach(item =>{

    const playSong = (file) => { 
        audioPlayer.innerHTML = `<source src="audio/music03.mp3" type="audio/mp3" />`;
        loaded = true;
        audioPlayer.load();
        audioPlayer.play();
    
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline';
    } 
    item.addEventListener('click', event=>{
        let image = item.getAttribute('data-image');
        let artist = item.getAttribute('data-artist');
        let song = item.getAttribute('data-song');
        let file = item.getAttribute('data-file');


        let playArtistComponent = document.getElementsByClassName('player-artist')

        playArtistComponent[0].innerHTML = `<img src="`+image+`" />
        <div class="artist-name">
            <p>`+artist+`</p>
            <br>
            <p>`+song+`</p>
        </div>
            `;
        
        playSong(file);
    })
});

