let capaMusic = document.getElementById('capa');
let tituloMusic = document.getElementById('titulo');
let autorMusic = document.getElementById('autor');
let audio = document.getElementById('audio');
let playPauseBtn = document.getElementById('playPauseBtn');

const Musics = [
    {
        capaMusic: './Img/Capa_da_musica.jpeg',
        tituloMusic: 'Mary on Cross',
        autorMusic: 'Ghost',
        Audio: './Music/Ghost - Mary On A Cross (Official Audio) - Ghost (youtube).mp3'
    },
    {
        capaMusic: './Img/Capa_da_musica2.jpeg',
        tituloMusic: 'Past Lives',
        autorMusic: 'Sapientdream',
        Audio: './Music/sapientdream, Slushii - Past Lives (Official Lyric Video) - sapientdream (youtube).mp3'
    }
];

let index = 0; // Indice da musica atual

// Função para carregar e atualizar a musica
function loadMusic(index) {
    const music = Musics[index];
    capaMusic.src = music.capaMusic;
    tituloMusic.textContent = music.tituloMusic;
    autorMusic.textContent = music.autorMusic;
    audio.src = music.Audio;
}

// Função para tocar e pausar a musica
function PlayerMusic() {
    if(audio.paused) {
        audio.play();
        playPauseBtn.classList.remove('bxs-right-arrow');
        playPauseBtn.classList.add('bx-pause');
    }else {
        audio.paused();
        playPauseBtn.classList.remove('bx-pause');
        playPauseBtn.classLista.add('bxs-right-arrow');
    }
}

// Proxima musica
function nextMusic() {
    index = (index + 1) % Musics.length;
    loadMusic(index);
    audio.play();
    playPauseBtn.classList.remove('bxs-right-arrow');
    playPauseBtn.classList.add('bx-pause');
}

// Musica anterior
function backMusic() {
    index = (index - 1 + Musics.length) % Musics.length;
    loadMusic(index);
    audio.play();
    playPauseBtn.classList.remove('bxs-right-arrow');
    playPauseBtn.classList.add('bx-pause');
}

// Carregar a primeira Musica ao abrir a página
window.onload = () => {
    loadMusic(index);
}