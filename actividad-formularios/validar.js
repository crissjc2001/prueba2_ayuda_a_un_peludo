$(document).ready(function(){

    $("#error").hide();

    $("#formulario").submit(function(){

        var mensaje = "";


        if($("#nombre").val().trim().length==0){
            mensaje += 'El nombre está vacío <br>';
        }

        if($("#correo").val().trim().length==0){
            mensaje += 'El correo está en vacío  <br>';
        }

        if($("#documento").val().trim().length > 9){
            mensaje += 'El numero de su rut debe tener al menos 9 números  <br>';
        }

        if($("#cuidad").val().trim().length==0){
            mensaje +='El nombre de ciudad está vacío  <br>';
        }
        
        if($("#comentario").val().trim().length < 50){
            mensaje += 'El mensaje debe tener al menos 50 caracteres  <br>';
        }

        if(mensaje != ""){

            $("#error").html(mensaje);
            $("#error").show();
            event.preventDefault();



        }
    });
});