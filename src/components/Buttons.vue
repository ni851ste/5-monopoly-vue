<template>
    <span class="buttons border border-primary col-lg-3 col-md-10 ">
        <div class="btn-group buttonGroup">
            <button v-on:click=rollButton() class="btn btn-primary" id="roll-button">Roll</button>
            <button v-on:click=quitGame() class="btn btn-danger" id="quit-button">Quit Game</button>
        </div>
        <div class="btn-group row buttonGroup" id="buy-buttons">
        </div>
        <div>
        <br>
        <button v-on:click="endTurnButton" id="end-turn-button">End Turn</button>
        </div>
        </span>
</template>

<script>
    import JQuery from 'jquery'

    let $ = JQuery;

    const QUIT = "q";
//    const GET_JSON = "json";

    const ROLL = "r";
    const END_TURN = "e";


    function removeBuyButtons() {
        let buyButtons = $("#buy-buttons");
        buyButtons.empty();
    }

    function hideStaticButtons() {
        $("#roll-button").css({"display": "none"});
        $("#quit-button").css({"display": "none"});
        $("#end-turn-button").css({"display": "block"});
    }

    function showStaticButtons() {
        $("#roll-button").css({"display": "block"});
        $("#quit-button").css({"display": "block"});
        $("#end-turn-button").css({"display": "none"});
    }

    function getCurrentPlayer(json) {
        return json.board.players.find(p => p.name === json.board.current_player);
    }

    function compareStreet(a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    }

    function generateBuyButtons(json, socket) {
        removeBuyButtons();
        let buyButtons = $("#buy-buttons");
        let currentPlayer = getCurrentPlayer(json);
        currentPlayer.bought_fields.sort(compareStreet).forEach(f => {
            buyButtons.append(
                $('<div/>', {'class': 'one-buy-button'}).append(
                    $('<p/>', {'class': 'house-par', 'id': f.name + '-p'})
                        .append($('<span/>', {'class': 'buy-house-span', 'text': f.name}))
                ).append(
                    $('<button/>', {
                        'id': f.name + '-button',
                        'class': 'buy-button btn-primary',
                        'text': "Buy house on " + f.name,
                        click: () => {
                            socket.send(f.name)
                        }
                    })
                )
            );
            for (let i = 0; i < f.houses; i++) {
                $("#" + f.name + '-p').append(
                    $('<img/>', {
                        'src': '/biggerHouse.png',
                        'id': f.name + '-house-' + i,
                        'class': 'house'
                    })
                )
            }
        });
    }


    export default {
        name: "Buttons",
        methods: {
            rollButton() {
                this.$socket.send(ROLL);
            },
            endTurnButton() {
                this.$socket.send(END_TURN);
            },
            quitGame() {
                this.$socket.send(QUIT);
            }
        },
        created() {
            this.$options.sockets.onmessage = (data) => {
                let json = JSON.parse(data.data);
                switch (String(json.board.state)) {
                    case "START_OF_TURN":
                        removeBuyButtons();
                        showStaticButtons();
                        break;
                    case "CAN_BUILD":
                        hideStaticButtons();
                        generateBuyButtons(json, this.$socket);
                        break;
                }
            }
        },
    }
</script>

<style scoped>
    @media (max-width: 992px) {
        .buttons {
            padding: 2em 10em 2em 2em;
        }

        .buy-button {
            margin-top: 5px;
        }
    }


    @media (min-width: 992px) {
        .buttons {
            padding: 2em;
        }

        .buy-button {
            margin-top: 5px;
        }

        .one-buy-button {
            padding-right: 2em;
            margin-bottom: 1em;
        }

        .buy-house-span {
            margin-right: 1em;
        }

        .house {
            margin-right: 0.2em;
        }
    }

    .buttons {
        background-color: white;
    }

</style>