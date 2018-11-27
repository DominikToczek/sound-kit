const sound = document.querySelector('#audio');
document.body.addEventListener('keypress', (e)=> {
    sound.currentTime = 0;
    switch(e.charCode)
    {
        case 113:   
            sound.src = 'sounds/boom.wav';
            sound.play();
            downButton('q');
            break;
        case 119:
            sound.src = 'sounds/clap.wav';
            sound.play();
            downButton('w');
            break;
        case 101:
            sound.src = 'sounds/hihat.wav';
            sound.play();
            downButton('e');
            break;
        case 114:
            sound.src = 'sounds/kick.wav';
            sound.play();
            downButton('r');
            break;
        case 97:   
            sound.src = 'sounds/my-man.mp3';
            sound.play();
            downButton('a');
            break;
        case 115:
            sound.src = 'sounds/openhat.wav';
            sound.play();
            downButton('s');
            break;
        case 100:
            sound.src = 'sounds/pickle_rick.mp3';
            sound.play();
            downButton('d');
            break;
        case 102:
            sound.src = 'sounds/ride.wav';
            sound.play();
            downButton('f');
            break;
        case 122:   
            sound.src = 'sounds/snap-yes_1.mp3';
            sound.play();
            downButton('z');
            break;
        case 120:
            sound.src = 'sounds/snare.wav';
            sound.play();
            downButton('x');
            break;
        case 99:
            sound.src = 'sounds/tink.wav';
            sound.play();
            downButton('c');
            break;
        case 118:
            sound.src = 'sounds/tom.wav';
            sound.play();
            downButton('v');
            break;
    }
})

function downButton(id){
    document.getElementById(id).style.background = "#800000";
}

function upButton(id)
{
    document.getElementById(id).style.background = "red";
}

document.body.addEventListener('keyup', (e)=> {
    switch(e.keyCode)
    {
        case 81:   
            upButton('q');
            break;
        case 87:
            upButton('w');
            break;
        case 69:
            upButton('e');
            break;
        case 82:
            upButton('r');
            break;
        case 65:   
            upButton('a');
            break;
        case 83:
            upButton('s');
            break;
        case 68:
            upButton('d');
            break;
        case 70:
            upButton('f');
            break;
        case 90:   
            upButton('z');
            break;
        case 88:
            upButton('x');
            break;
        case 67:
            upButton('c');
            break;
        case 86:
            upButton('v');
            break;
    }
})


const checkbox1 = document.getElementById("checkbox-record-1");
const checkbox2 = document.getElementById("checkbox-record-2");
const checkbox3 = document.getElementById("checkbox-record-3");
const checkbox4 = document.getElementById("checkbox-record-4");
const playBtn1 = document.getElementById('btn-play-1');
const playBtn2 = document.getElementById('btn-play-2');
const playBtn3 = document.getElementById('btn-play-3');
const playBtn4 = document.getElementById('btn-play-4');
const playAllBtn = document.getElementById('btn-play-all');
let tabKey1 = [];
let tabTime1 = [];
let tabKey2 = [];
let tabTime2 = [];
let tabKey3 = [];
let tabTime3 = [];
let tabKey4 = [];
let tabTime4 = [];


function record(checkbox, tabKey, tabTime){
    if (checkbox.checked)
    {
        let i = 0;
        document.onkeydown = function(e)
        {
            let date = new Date().getTime();
            let key = e.keyCode;
            tabKey[i] = key;
            tabTime[i] = date;
            i++;
        }
    }
}

function playTrack(tabKey, tabTime){
    for (let i=0; i<tabKey.length; i++)
    {
        if (i !== 0)
        {
            setTimeout(function(){play(tabKey[i])}, calculateTime(i, tabTime));
        }
        else
        {
            play(tabKey[i]);
        }
    }
}

function calculateTime(i, tabTime)
{
    return tabTime[i] - tabTime[0];
}

function play(keyCode)
{
    switch(keyCode)
    {
        case 81:
            sound.src = 'sounds/boom.wav';
            break;
        case 87:
            sound.src = 'sounds/clap.wav';
            break;
        case 69:
            sound.src = 'sounds/hihat.wav';
            break;
        case 82:
            sound.src = 'sounds/kick.wav';
            break;
        case 65:   
            sound.src = 'sounds/my-man.mp3';
            break;
        case 83:
            sound.src = 'sounds/openhat.wav';
            break;
        case 68:
            sound.src = 'sounds/pickle_rick.mp3';
            break;
        case 70:
            sound.src = 'sounds/ride.wav';
            break;
        case 90:   
            sound.src = 'sounds/snap-yes_1.mp3';
            break;
        case 88:
            sound.src = 'sounds/snare.wav';
            break;
        case 67:
            sound.src = 'sounds/tink.wav';
            break;
        case 86:
            sound.src = 'sounds/tom.wav';
            break;
    }
    sound.play();
}

checkbox1.addEventListener('change', function(){
    record(checkbox1,tabKey1,tabTime1);
});
checkbox2.addEventListener('change', function(){
    record(checkbox2,tabKey2,tabTime2);
});
checkbox3.addEventListener('change', function(){
    record(checkbox3,tabKey3,tabTime3);
});
checkbox4.addEventListener('change', function(){
    record(checkbox4,tabKey4,tabTime4);
});

playBtn1.addEventListener('click', (e) => {
    playTrack(tabKey1, tabTime1);
})

playBtn2.addEventListener('click', (e) => {
    playTrack(tabKey2, tabTime2);
})

playBtn3.addEventListener('click', (e) => {
    playTrack(tabKey3, tabTime3);
})
playBtn4.addEventListener('click', (e) => {
    playTrack(tabKey4, tabTime4);
})
playAllBtn.addEventListener('click', (e) => {
    playTrack(tabKey1, tabTime1);
    playTrack(tabKey2, tabTime2);
    playTrack(tabKey3, tabTime3);
    playTrack(tabKey4, tabTime4);
})