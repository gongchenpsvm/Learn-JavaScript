new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false, //Initially the game stops
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function() {
            var damageToMonster = Math.ceil(3 + Math.random()*(10-3));
            var damageToPlayer = Math.ceil(5 + Math.random()*(15-5));
            this.playerHealth-=damageToPlayer;
            this.monsterHealth-=damageToMonster;
            this.checkWin();
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damageToMonster
            }, {
                isPlayer: false,
                text: 'Monster hits player for ' + damageToPlayer
            })
        },
        specialAttack: function() {
            var damageToMonster = Math.ceil(9 + Math.random()*(20-9));
            var damageToPlayer = Math.ceil(5 + Math.random()*(15-5));
            this.playerHealth-=damageToPlayer;
            this.monsterHealth-=damageToMonster;
            this.checkWin();
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster hard for ' + damageToMonster
            }, {
                isPlayer: false,
                text: 'Monster hits player for ' + damageToPlayer
            })
        },
        heal: function() {
            if (this.playerHealth <= 90){
                this.playerHealth += 10;
            }
            else {
                this.playerHealth = 100;
            }
            var damageToPlayer = Math.ceil(5 + Math.random()*(15-5));
            this.playerHealth-=damageToPlayer;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for ' + 10 + ' and receives damage ' + damageToPlayer
            });
        },
        giveUp: function() {
            this.gameIsRunning = false;
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
