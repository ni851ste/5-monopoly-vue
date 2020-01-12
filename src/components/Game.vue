<template>
    <div class="container">
        <div class="row">
            <span class="col-lg-1"></span>
            <main-header>

            </main-header>
        </div>
        <div class="row">
            <span class="col-lg-1"></span>
            <info-text>

            </info-text>
            <span class="col-lg-1"></span>
            <buttons>

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

</style>