const sonic = document.querySelector('.sonic');
const spike = document.querySelector('.spikes');
const botao = document.getElementById('botao');
var pontos = 0;


const jump = () => {
    sonic.classList.add('jump')

    sonic.src = "./img/sonicjump.gif";

    setTimeout(() => {
        sonic.classList.remove('jump')
        sonic.src = "./img/sonicrun.gif";
    },500);
}

const loop = setInterval(() => {

    const spikePosition = spike.offsetLeft;
    const sonicPosition = window.getComputedStyle(sonic).bottom.replace('px','');

    if (spikePosition <= 120 && spikePosition > 0 && sonicPosition < 80) {

        spike.style.animation = 'none';
        spike.style.left = `${spikePosition}px`;

        sonic.style.animation = 'none';
        sonic.style.bottom = `${sonicPosition}px`;

        
        sonic.src = "./img/sonicdie.webp";
        setTimeout(() => {
            sonic.src = "./img/sonicdie.webp";
        },120);

        clearInterval(pontuacao);
        clearInterval(loop);
        document.removeEventListener('keydown', jump)


        botao.style.display = 'block';
    }

}, 10)

function reiniciar() {
    window.location.reload();
}

function tempo() {
    var score = document.getElementById('score');
    var pontos = parseInt(score.textContent)
    pontos++;
    score.textContent = pontos;
}

const pontuacao = setInterval(tempo, 100)

document.addEventListener('keydown', jump);