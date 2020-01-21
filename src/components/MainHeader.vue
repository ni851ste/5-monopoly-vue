<template>
    <span class="main-header border border-primary col-lg-10 col-md-10">

        <span id="main-header-current-player">
                {{this.currentPlayerName}}name
            <template v-if="user.loggedIn">
                <div id="username">
                    <p>
                    {{user.data.displayName}}
                    </p>
                    <p>
                    <button class="btn btn-primary float-right" id="so-button" @click.prevent="signOut">Sign out</button>
                    </p>
                </div>
            </template>
            <template v-else>
                <p class="float-right">
                    <router-link to="login" class="nav-link">
                        <button class="btn btn-primary ">Login</button>
                    </router-link>
                    <router-link to="register" class="nav-link">
                        <button class="btn btn-primary">Register</button>
                    </router-link>
                </p>
            </template>
        </span>

        <p id="main-header-current-money">
            {{this.currentPlayerMoney}}money
        </p>

    </span>

</template>

<script>
    import {mapGetters} from "vuex";
    import firebase from "firebase";

    function getCurrentPlayer(json) {
        return json.board.players.find(p => p.name === json.board.current_player);
    }

    function currentPlayerName(json) {
        return json.board.current_player;
    }

    function getCurrentMoney(json) {
        return getCurrentPlayer(json).money;
    }

    export default {
        name: "MainHeader",
        props: {
            currentPlayerName: String,
            currentPlayerMoney: String,
            tmpMessage: String
        },
        computed: {
            ...mapGetters({
// map `this.user` to `this.$store.getters.user`
                user: "user"
            })
        },
        methods: {
            async demandUpdate() {
                await new Promise(r => setTimeout(r, 300));
                this.$socket.send('json');
            },
            signOut() {
                firebase
                    .auth()
                    .signOut()
                    .then(() => {
                        this.$router.replace({
                            name: "Login"
                        });
                    });

            },
            beforeMount() {
                this.demandUpdate()
            },
            created() {
                this.$options.sockets.onmessage = (data) => {
                    let json = JSON.parse(data.data);
                    window.console.log("DATA");
                    window.console.log(json);
                    this.currentPlayerName = currentPlayerName(json);
                    this.currentPlayerMoney = String(getCurrentMoney(json));//+ ' €';
                };
            }
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

    #username {
        text-align: right;
        margin-bottom: 1em;
    }

</style>