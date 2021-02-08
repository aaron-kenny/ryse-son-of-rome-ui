(function(){
    "use strict";
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
    
    var themeMusicAudio = document.getElementById("themeMusicAudio");
    document.getElementById('themeMusicButton').addEventListener('click', function(event) {
        themeMusicAudio.paused ? themeMusicAudio.play() : themeMusicAudio.pause();
        event.target.classList.toggle('fa-volume-mute');
        event.target.classList.toggle('fa-volume-up');
    });
})();