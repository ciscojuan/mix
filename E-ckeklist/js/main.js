$(function CrearProcduto(){

    $('#add').on('click',function(){
        var producto = $('#producto').val(); 
        var checklist = $('#lista');
        checklist.append('<li class="bg-warning d-flex justify-content-between my-2">'
                         + '<a href="#!" class="">' + producto + '</a></li>');
                        // añado un ul con un li + producto a checlist
        $('#producto').val('');
    });   
})

$(function eliminarProducto() {
    //Si le da click al li, preguntamos si fue al span o no
    $('#lista').on('click', 'li', function(e){ 
        if($(e.target).attr('class') ==="list-group-item d-flex justify-content-between align-items-center"){
          $(this).remove();
        }
        
     });
      
 });
 //ponga el btn disable si el input esta vacio
$(function validarInput(){
    $(document).ready(function(){               
        $('#add').attr('disabled','disabled');
        $('#producto').keypress(function(){
            if($(this).val() != ''){
                $('#add').removeAttr('disabled');
            }
        });
    });
})

$(function() {
    function mostrarHora() {
        var fecha = new Date(), // nuevo objeto Fecha
            hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
        $('#hora').text(hora);
    }
    setInterval(mostrarHora, 1000); // la función "mostrarHora" se ejecuta cada segundo
});


