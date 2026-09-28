const btn = document.getElementById('button');

btn.addEventListener('click', function() {
    btn.value = 'Enviando...';

    const seleccionEstudios = document.querySelectorAll('input[name="estudios"]:checked');
    const indicacionesCapturadas = document.getElementById('indicaciones').value;
    const estudiosFinales = Array.from(seleccionEstudios).map(cb => cb.value).join(', ');

    const parametrosEmail = {
        estudios: estudiosFinales,
        indicaciones: indicacionesCapturadas

    }

    const serviceID = 'default_service';
    const templateID = 'template_i34b31q';

    emailjs.send(serviceID, templateID, parametrosEmail)
     .then(() => { 
        btn.value = 'Enviar';
     
        Swal.fire ({
            title: 'Orden Enviada',
            text: 'La Orden ha sido enviada y notificada con éxito',
            icon: 'success',
            background: '#2b2b2b',  
            color: '#ffffff',  
            confirmButtonColor: '#00aeff', 
            confirmButtonText: '¡Entendido!'
        });

     }, (err) => {
        btn.value = 'Enviar'; 
 
        Swal.fire({
            title: 'Error de conexión',
            text: 'Ocurrió un problema al enviar la orden: ' + JSON.stringify(err),
            icon: 'error',
            background: '#2b2b2b',
            color: '#ffffff',
            confirmButtonColor: '#00aeff'
        });
        console.log(JSON.stringify(err));
    });
});