var main = function() {
    var volume;
  
  
}

$(document).ready(function() {
    // This is the play button
    $('#play').click(function(){
        $('#message').text("Playing track");
        $('#player').trigger("play");
    });
    
    // This is the pause button
    $('#pause').click(function(){
        $('#message').text("Track paused");
        $('#player').trigger("pause");
    });

    // This is the mute button
    $('#mute').click(function(){
        $('#player').prop('muted', true);
        $('#message').text("Track muted");
    });

    // This is the unmute button
    $('#unmute').click(function(){
        $('#player').prop('muted', false);
        $('#message').text("Track unmuted");
    });

    // The STOP button
    $('#stop').click(function(){
        $('#player').trigger("pause");
        $('#player')[0].currentTime = 0;
        $('#message').text("Track stopped");      
    });

    // The VOLUME UP button
$('#volumeup').click(function(){
    let currentVolume = $('#player')[0].volume;
    if (currentVolume < 1) {
        $('#player')[0].volume = Math.min(currentVolume + 0.1, 1);
        $('#message').text("Volume increased");
    } else {
        $('#message').text("Volume is at maximum");
    }
});

// The VOLUME DOWN button
$('#volumedown').click(function(){
    let currentVolume = $('#player')[0].volume;
    if (currentVolume > 0) {
        $('#player')[0].volume = Math.max(currentVolume - 0.1, 0);
        $('#message').text("Volume decreased");
    } else {
        $('#message').text("Volume is at minimum");
    }
});




});

