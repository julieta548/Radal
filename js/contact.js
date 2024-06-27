document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Estos valores deben coincidir con los que creaste en EmailJS
    const serviceID = 'service_blmtd9i';
    const templateID = 'template_znab4m5';

    // Obtén los datos del formulario
    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            alert('Correo enviado con éxito!', response.status, response.text);
        }, function(error) {
            alert('Fallo en el envío del correo:', error);
        });
});
