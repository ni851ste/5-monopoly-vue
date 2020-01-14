<template>
    <span class="main-header border border-primary col-lg-10 col-md-10">
        <p id="main-header-current-player">{{this.currentPlayerName}}   &lt;----</p>
        <p id="main-header-current-money">{{this.currentPlayerMoney}} €</p>
        <p>{{this.tmpMessage}} helo</p>
                </span>

</template>

<script>
    export default {
        name: "MainHeader",
        props: {
            currentPlayerName: String,
            currentPlayerMoney: Number,
            tmpMessage: String
        },
        methods: {
            async update() {
                await new Promise(r => setTimeout(r, 1000));
                let json = JSON.parse(this.$socket.send('json'));
                this.currentPlayerName = json;
                this.currentPlayerMoney = 10;
            }
        },
        beforeMount() {
            this.update()
        }
    }
</script>

<style scoped>

    .main-header {
        background-color: white;
        margin-top: 2em;
        margin-bottom: 2em;
        padding-top: 0.5em;
        min-height: 8em;
    }

    #main-header-current-player {
        font-size: 1.2em;
        font-weight: bold;
        text-decoration: underline;
    }

</style>