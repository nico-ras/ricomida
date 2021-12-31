$(function(){
    $('[data-toggle="tooltip"]').tooltip();

    $('#enviarCorreo').click(function(){
        alert('El correo fue enviado correctamente...');
    });

    $('.ingDiv h3').dblclick(function(){
        $(this).css("color", "red");
    });

    $('.prepDiv h3').dblclick(function(){
        $(this).css("color", "red");
    });

    $('.card-title').click(function(){
        $(this).parent().children('.card-text').toggle()
    });
});