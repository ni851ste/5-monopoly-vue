<template>
    <span class="info-text border border-primary col-lg-6 col-md-10 ">
        <div id="info-text-div">
            <span id="letters">
            </span>
            <p>{{infoText}}</p>
        </div>
    </span>
</template>

<script>
    import JQuery from 'jquery'
    import anime from 'animejs'
    let $ = JQuery

    function updateInfoText(msg) {
        let letters = $("#letters");
        letters.empty();
        let lines = msg.split('\n');
        for (let i = 0; i < lines.length; i++) {
            const pId = "text-p" + i;
            let p = $('<p/>', {'id': pId});
            p.html(lines[i].replace(/\S/g, "<span class='letter'>$&</span>"));
            letters.append(p);
            animateText(document.querySelectorAll('#' + pId + ' .letter'));
        }
    }

    function animateText(targets) {
        let tl = anime.timeline({loop: false});
        tl.add({
            targets: targets,
            translateY: ["2.5em", 0],
            translateZ: 0,
            duration: 500,
            delay: function (el, i) {
                return i * 25;
            }
        });
    }

    export default {
        name: "InfoText",
        props: {
            infoText: String,
        },
        created() {
            this.$options.sockets.onmessage = (data) => {
                let json = JSON.parse(data.data)
                if(json.hasOwnProperty('msg')) {
                    let msg = String(json.msg);
                    //this.infoText = String(json.msg);
                    updateInfoText(msg);
                }
            };
        }
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