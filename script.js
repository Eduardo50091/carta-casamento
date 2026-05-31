$(document).ready(function () {

    const envelope = $('#envelope');
    const letter = $('.letter');

    // Primeiro clique: abre envelope
    envelope.on('click', function () {

        if (envelope.hasClass('close')) {
            envelope.removeClass('close')
                    .addClass('open');
        }
    });

    // Segundo clique: zoom na carta
    letter.on('click', function (e) {

        // impede que o clique suba para o envelope
        e.stopPropagation();

        if (envelope.hasClass('open')) {
            envelope.addClass('zoom');
        }
    });

});
