<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-md-12" id="textCol">
                <div class="border border-primary col-lg-12 place-maker" id="top-place-maker">
                    <h1>Rules of Monopoly</h1>
                </div>
                <h2>General Procedure</h2>
                <p>
                    Monopoly is played with 2 to 6 players, each starting with 1500€ budget. The first action of a turn is
                    to move the token forward on the files by the number rolled on the dice.
                    When landing on an unowned property, the player can decide to buy it for the given price. If the
                    property is already bought by another player, he
                    has to pay rent as listed on the property. If the property is already owned by the player stepping on
                    it, nothing happens.
                </p>
                <h2>Fields and Properties</h2>
                <h3>Go!</h3>
                <p>As you could imagine, this is the start field for every player. When passing this field, the player is
                    given 200€. Other than that, nothing happens if you land on the fiel itself.</p>
                <h3>Taxes</h3>
                <p>There are 2 tax fiels on the board. When landing on a tax field, the player has to pay the amount to the
                    Bank. The income tax at the beginning of the board is 100€, the luxury tax at the end is 200€.</p>
                <h3>Jail</h3>
                <p>
                    If you simply step on the Jail, nothing happens, since you are only visiting. If you somehow must go to
                    Jail, you will have to roll a double to get out again. On each turn, you have 3 rolls to receive the
                    double.
                    Alternatively, you can pay 500€ to the Bank instead of rolling. When in Jail, you will still receive
                    rent and you are allowed to buy houses.
                </p>
                <h3>Free Parking</h3>
                <p>On Free Parking, nothing happens. It is just a field without any effects.</p>
                <h3>Go To Jail</h3>
                <p>This field already states its function alredy in its name. If you land on the "Go To Jail" field, you
                    must immediately go to jail.</p>
                <h3>Chance and Community Chest</h3>
                <p>When landing on a Chance or Community Chest field, the player draws a card from the corresponding card
                    stack. He then has to follow the instructions written on it.</p>
                <h3>Properties</h3>
                <h4>Streets</h4>
                <p>
                    Streets are the most fields on the board. They are in coloured groups of 2 or 3. If a player has all the
                    streets of a group, he has several advantages: The base rent of each street is doubled and he is allowed
                    to build houses.
                    The rent of a street is determined by the amount of houses built on it.
                </p>
                <h4>Stations</h4>
                <p>There are 4 stations on the board. The rent when landing on one of them is determined by the amount of
                    stations bought by the owner.</p>
                <h4>Works</h4>
                <p>There is the electricity and the water works. When landing on those fields, the rent is 4 times the
                    rolled dice if the player owns one of them and 10 times the rolled dice if the player owns both.</p>
            </div>
        </div>

        <div class="row">
            <div class="placeholder"/>
            <div class="border border-primary col-lg-10 place-maker">
                <div class="btn-group col-lg-2 col-md-12">
                    <!--a class="btn h-100 " href="/game" id="startGameButton">
                        <input type="button" value="PLAY GAME"/>
                    </a-->
                    <router-link class="mr-3" to="/game">Play</router-link>
                </div>
            </div>
            <div class="placeholder"/>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Rules"
    }
</script>

<style scoped>
    @media (max-width: 992px) {
        #textCol {
            font-family: "Comic Sans MS", cursive, sans-serif;
            background-color: lightgray;
        }
    }

    @media (min-width: 992px) {
        #textCol {
            font-family: "Comic Sans MS", cursive, sans-serif;
            background-color: lightgray;
        }

        #startGameButton {
            min-width: 20%;
        }
    }

    .place-maker {
        text-align: center;
        padding: 1em 2em 1em 2em;
        background-color: white;
    }

    #top-place-maker {
        margin-bottom: 2em;
    }

    h1, h2, h3, h4, h5 {
        text-decoration: underline;
    }
</style>