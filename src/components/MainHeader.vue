<template>
    <span class="main-header border border-primary col-lg-10 col-md-10">
        <p id="main-header-current-player"></p>
        <p id="main-header-current-money"></p>
        <p>MAIN HEADER</p>
                </span>

</template>

<script>
    export default {
        name: "MainHeader"
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