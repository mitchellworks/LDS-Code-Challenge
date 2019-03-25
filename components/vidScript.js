/* This script helps us access the Youtube API so we can respond to their events with our own actions */

function VidScript() {
    // AM: not super happy with this approach, but wanted to make sure the youtube API functions bound properly
    // (after vid has loaded).
    let tag = document.createElement("script");
    tag.id = "iframe";
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let player;
    window.onYouTubeIframeAPIReady = () => {
        player = new YT.Player("vid-player", {
            events: {
                onStateChange: onPlayerStateChange
            }
        });
    };

    function onPlayerStateChange() {
        document.querySelector("#vid").classList.add("active");
    }

    //this extra call can be useful on local dev only:
    // onYouTubeIframeAPIReady();

}


export default VidScript