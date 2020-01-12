<template>
    <div id="app">
        <main-border>TEST</main-border>
        <p/>
        <router-view>view</router-view>
    </div>
</template>

<script>
    import 'bootstrap';
    import 'bootstrap/dist/css/bootstrap.min.css'
    import MainBorder from "./components/MainBorder";

    export default {
        name: 'app',
        components: {
            'main-border': MainBorder,

        }
    }

</script>

<style>

</style>
