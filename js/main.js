
// function play(type) {
//     var oscillator = audioContext.createOscillator();
//     oscillator.connect(audioContext.destination);
//
//     oscillator.start(audioContext.currentTime);
//     oscillator.stop(audioContext.currentTime + 3);
// }

function Oscillator(audioContext) {
    this.oscillator = null;
    this.play = function(type) {
        this.oscillator = audioContext.createOscillator();
        this.oscillator.connect(audioContext.destination);

        this.oscillator.type = type;

        this.oscillator.start(audioContext.currentTime);
    };

    this.stop = function() {
        this.oscillator.stop(audioContext.currentTime);
    };

    this.setType = function(type) {
        this.oscillator.type = type;
    };

    this.setF = function(f) {
        this.oscillator.frequency.value = Number(f);
    };
}

$(document).ready(function() {
    var audioContext = new (window.AudioContext || window.webkitAudioContext);
    var player = new Oscillator(audioContext);
    $('#switch').click(function(e) {
        if ($(this).prop('checked')) {
            var type = $('input[name="type"]:checked').val();
            if (type) {
                player.play(type);
            } else {
                alert('Please select the oscillator type first!');
            }
        } else {
            player.stop();
        }
    });

    $('input[name="type"]').on('change', function(e) {
        var type = $(this).filter(function(index) {
            return $(this).prop('checked');
        }).val();
        player.setType(type);
    });

    $('#freq').on('change', function(e) {
        var f = $(this).val();
        player.setF(f);
    });
});
