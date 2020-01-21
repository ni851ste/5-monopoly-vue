<template>
    <span class="buttons border border-primary col-lg-3 col-md-10 ">
                        <div class="btn-group buttonGroup">
                            <button class="btn btn-primary" id="roll-button">Roll</button>
                            <button class="btn btn-danger" id="quit-button">Quit Game</button>
                        </div>
                        <div class="btn-group row buttonGroup" id="buy-buttons">
                            <br>
                        </div>
                        <div>
                            <br>
                            <button id="end-turn-button">End Turn</button>
                        </div>
                </span>
</template>

<script>
    import JQuery from 'jquery'
    let $ = JQuery

    function removeBuyButtons() {
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

    export default {
        name: "Buttons"
        ,
        methods: {},
        created() {
            this.$options.sockets.onmessage = (data) => {
                let json = JSON.parse(data.data)
                switch (String(json.board.state)) {
                    case "START_OF_TURN":
                        removeBuyButtons();
                        showStaticButtons();
                        break;
                    case "CAN_BUILD":
                        hideStaticButtons();
                        //generateBuyButtons(json);
                        break;
                }
            }
        }
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