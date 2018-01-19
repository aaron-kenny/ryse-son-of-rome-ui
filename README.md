# RYSE Son of Rome UI

![RYSE Son of Rome UI](/img/screenshots/screenshot-gladiator.jpg?raw=true "RYSE Son of Rome UI")

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

### Hover audio effects
Plays audio effects on menu item hover. Creates a new audio element for each menu item to ensure it never gets cut out.
```
<script>
    // Duplicate the audio so each anchor has it's own file to play.
    // This will allow them to play simultaneously without interrupting each other.
    $(".content-box__link").each(function(i) {
        if (i != 0) { // only clone if more than one needed
            $("#audioFxSword").clone().attr("id", "audioFxSword-" + i).appendTo($(this).parent());
        }
        $(this).data("swordFx", i); // save reference
    })
    .mouseenter(function() {
        $("#audioFxSword-" + $(this).data("swordFx"))[0].play();
    });
    $("#audioFxSword").attr("id", "audioFxSword-0"); // get first one into naming convention
</script>
```