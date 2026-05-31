// Executa quando toda a página terminar de carregar
$(document).ready(function () {

    // Seleciona o envelope
    var envelope = $('#envelope');

    // Seleciona o botão Open
    var btn_open = $("#open");

    // Seleciona o botão Reset
    var btn_reset = $('#reset');

    // Ao clicar no envelope
    envelope.click(function () {
        open();
    });

    // Ao clicar no botão Open
    btn_open.click(function () {
        open();
    });

    // Ao clicar no botão Reset
    btn_reset.click(function () {
        close();
    });

    // Função que abre o envelope
    function open() {

        // Adiciona a classe open
        envelope.addClass('open')

            // Remove a classe close
            .removeClass('close');
    }

    // Função que fecha o envelope
    function close() {

        // Adiciona a classe close
        envelope.addClass('close')

            // Remove a classe open
            .removeClass('open');
    }
});