<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card border border-primary">
                    <div class="card-header border-bottom border-primary">Dashboard</div>
                    <div class="card-body">
                        <div v-if="user" class="alert alert-success" role="alert">You are logged in!</div>
                        <router-link to="game" class="nav-link" id="button">
                            <button class="btn btn-primary" v-on:click="demandUpdate">Back to Game</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from "vuex";
    export default {
        computed: {
            // map `this.user` to `this.$store.getters.user`
            ...mapGetters({
                user: "user"
            })
        },
        methods: {
            async demandUpdate() {
                await new Promise(r => setTimeout(r, 300));
                this.$socket.send('json');
            },
        }
    };
</script>

<style scoped>
    #button {
        text-align: center;
    }
</style>