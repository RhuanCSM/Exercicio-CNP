const startGame = document.getElementById('btn')

function consoleBtn() {
    console.log('Game is starting...');
}


startGame.addEventListener('click', consoleBtn)

const oLeandro = {
    name: 'Leandro',
    éLegal: function pôLeandro() {
        console.log(', não é?')
    }
};

oLeandro.éLegal();