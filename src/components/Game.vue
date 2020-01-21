<template>
    <div class="container main-body">
        <div class="row">
            <span class="col-lg-1"></span>
            <main-header class="main-header">

            </main-header>
        </div>
        <div class="row">
            <span class="col-lg-1"></span>
            <template v-if="user.loggedIn">
                <info-text/>
            </template>
            <span class="col-lg-1"></span>
            <template v-if="user.loggedIn">
                <buttons/>
            </template>

            <span class="col-lg-1"></span>
        </div>
    </div>
</template>

<script>
    import MainHeader from "./MainHeader";
    import InfoText from "./InfoText";
    import Buttons from "./Buttons";
    import {mapGetters} from "vuex";


    export default {
        name: "Game",
        components: {
            'main-header': MainHeader,
            'info-text': InfoText,
            'buttons': Buttons
        },
        methods: {
        },
        computed: {
            ...mapGetters({
// map `this.user` to `this.$store.getters.user`
                user: "user"
            })
        },
        beforeMount() {
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
    }

    .main-header {
        background-color: white;
        margin-top: 2em;
        margin-bottom: 2em;
        padding-top: 0.5em;
        min-height: 8em;
    }

</style>