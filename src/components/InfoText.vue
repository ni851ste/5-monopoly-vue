<template>
    <span class="info-text border border-primary col-lg-6 col-md-10 ">
        <div id="info-text-div">
            <span id="letters">
            </span>
            <p>INFO TEXT</p>
        </div>
    </span>
</template>

<script>
    export default {
        name: "InfoText"
    }
</script>

<style scoped>

    @media (max-width: 992px) {
        .info-text {
            margin-top: 2em;
            margin-bottom: 2em;
        }
    }

    @media (min-width: 992px) {
        .info-text {

        }
    }

    .info-text {
        padding-top: 1em;
        background-color: white;
    }

    #info-text-div {
        position: relative;
        display: inline-block;
        overflow: hidden;
    }

    #info-text-div .letter {
        display: inline-block;
        line-height: 1em
    }

</style>