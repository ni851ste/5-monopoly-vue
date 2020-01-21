<template>
    <div id="app">
        <p/>
        <router-view>view</router-view>
    </div>
</template>

<script>
    import 'bootstrap';
    import 'bootstrap/dist/css/bootstrap.min.css'

    export default {
        name: 'app',

    }

</script>

<style>
    .vsc-initialized {
        background-color: lightgray;
    }
</style>
