# RYSE Son of Rome UI

![RYSE Son of Rome UI](/img/screenshots/screenshot-main.jpg?raw=true "RYSE Son of Rome UI")

## Features

### Music player
Auto plays theme music with ability to toggle mute.
```
<!-- BACKGROUND MUSIC -->
<audio id="musicPlayer" autoplay loop hidden>
    <source src="audio/Ryse Son of Rome - Main Theme.mp3" type="audio/mpeg">
    If you're reading this your browser doesn't support the HTML5 audio element.
</audio>
```
```
<!-- MUTE BUTTON -->
<a class="music-player__mute" href="javascript:void(0);" onclick="document.getElementById('musicPlayer').muted=!document.getElementById('musicPlayer').muted"><i class="fa fa-volume-up mute-icon" aria-hidden="true"></i></a>
<script>
    // Mute button icon change
    $(".music-player__mute").click(function(){
        $(this).find("i").toggleClass("fa-volume-off fa-volume-up");
    });
</script>
```