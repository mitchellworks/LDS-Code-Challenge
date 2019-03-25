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
    }

    function onPlayerStateChange(event) {
        document.querySelector("#vid").classList.add("active");
    }

    onYouTubeIframeAPIReady();

}


export default VidScript