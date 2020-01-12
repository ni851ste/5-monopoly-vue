<template>
    <div class="main-border">
        <p>MAIN STUFF HERE</p>
        <!--div class="main-frame-margin">
            <div class="main-frame border border-primary">
                <p>{{ content }}</p>
            </div>
        </div-->
    </div>
</template>

<script>
    export default {
        name: 'MainBorder',
        props: {
            content: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main-frame-margin {
        background-color: white;
        padding: 1em 1em 1em 1em;
    }

    .main-frame {
        background-color: lightgray;
        padding: 1em 1em 1em 1em;
    }
</style>