function VidScript() {
    // AM: not super happy with this approach, but wanted to make sure the youtube API functions bound properly
    // (after vid has loaded).
    let tag = document.createElement("script");
    tag.id = "iframe";
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    let tag2 = document.createElement("script");
    tag2.text = "    var player;function onYouTubeIframeAPIReady() {\n" +
        "        player = new YT.Player(\"vid-player\", {\n" +
        "            events: {\n" +
        "                onStateChange: onPlayerStateChange\n" +
        "            }\n" +
        "        });\n" +
        "    }\n" +
        "    function onPlayerStateChange(event) {\n" +
        "        document.querySelector(\"#vid\").classList.add(\"active\");\n" +
        "    }\n";
    firstScriptTag.parentNode.insertBefore(tag2, firstScriptTag);

}


export default VidScript