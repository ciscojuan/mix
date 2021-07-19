'use stric'


$(document).ready(function () {
     

    function mostrarHora() {
        function mostrarHora() {
            var fecha = new Date(), // nuevo objeto Fecha
                hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
            $('#hora').text(hora);
        }
        setInterval(mostrarHora, 1000); // la función "mostrarHora" se ejecuta cada segundo
    };
    $('#mosquera').sortable();
    $('#acapulco').sortable();
    $('#done').sortable();
    


    $('#mosquera').on('dblclick', 'li', function () {
        $(this).appendTo('#done').css('background','#ffc107');
    });

    $('#acapulco').on('dblclick', 'li', function () {
        $(this).appendTo('#done').css('background','#007bff');
    });
   
    $('#done').on('click', 'li', function () {
        if ($(this).hasClass("acapulco")) {
            $(this).appendTo('#acapulco').css('background','#FFF');;
        } else {
            $(this).appendTo('#mosquera').css('background','#FFF');;
        }
    });
    
    $(document).tooltip();
    mostrarHora()
});

