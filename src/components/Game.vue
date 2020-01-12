<template>
    <div class="container main-body">
        <div class="row">
            <span class="col-lg-1"></span>
            <main-header class="main-header">

            </main-header>
        </div>
        <div class="row">
            <span class="col-lg-1"></span>
            <info-text class="info-text">

            </info-text>
            <span class="col-lg-1"></span>
            <buttons class="buttons">

            </buttons>
            <span class="col-lg-1"></span>
        </div>
    </div>
</template>

<script>
    import MainHeader from "./MainHeader";
    import InfoText from "./InfoText";
    import Buttons from "./Buttons";


    export default {
        name: "Game",
        components: {
            'main-header': MainHeader,
            'info-text': InfoText,
            'buttons': Buttons
        }
    }
</script>

<style scoped>
    @media (max-width: 992px) {
        .main-body {
            margin: 0 10% 0 10%;
        }

        .info-text {
            margin-top: 2em;
            margin-bottom: 2em;
        }

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
        
        .info-text {

        }
    }

    .info-text {
        padding-top: 1em;
        background-color: white;
    }

    .buttons {
        background-color: white;
    }

    .main-header {
        background-color: white;
        margin-top: 2em;
        margin-bottom: 2em;
        padding-top: 0.5em;
        min-height: 8em;
    }

</style>