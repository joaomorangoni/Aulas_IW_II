const sonic = document.querySelector('.sonic');
const spike = document.querySelector('.spikes');

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

        clearInterval(loop);

        console.log(sonic)
    }

}, 10)


document.addEventListener('keydown', jump);