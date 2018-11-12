let sound = document.querySelector('#audio');
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

let date = new Date();
let elem = document.getElementById("checkbox-record");
let tab = [];

elem.addEventListener('click', function(){
    if (elem.checked)
    {
        let i = 0;
        document.onkeydown = function(e)
        {
            let key = getKey(e);
            tab[i] = key;
            i++;
        }
    }
});

function getKey(e)
{
    return e.keyCode;
}

function wypisz()
{
    for (let i=0; i< tab.length; i++)
    {
        console.log(tab[i]);
    }
}