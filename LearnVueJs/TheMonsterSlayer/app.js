new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false //Initially the game stops
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            var damageToMonster = Math.ceil(3 + Math.random()*(10-3));
            var damageToPlayer = Math.ceil(5 + Math.random()*(15-5));
            this.playerHealth-=damageToPlayer;
            this.monsterHealth-=damageToMonster;
            this.checkWin();
        },
        specialAttack: function() {

        },
        heal: function() {

        },
        giveUp: function() {

        },
        checkWin: function() {
            if (this.monsterHealth < 0) {
                if (confirm('You win! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
            } else if (this.playerHealth < 0) {
                if (confirm('You lose! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
            }
        }
    }
});
