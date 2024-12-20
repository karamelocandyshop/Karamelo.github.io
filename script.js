//Esta función es para lo de las cookies
document.addEventListener('DOMContentLoaded', function() {
    var cookieConsent = document.getElementById('cookie-consent');
    var cookieAcceptButton = document.getElementById('cookie-accept');

    // Verifica si el usuario ya ha aceptado las cookies
    if (!localStorage.getItem('cookieConsent')) {
        cookieConsent.style.display = 'block';
    }

    // Maneja la acción del botón de aceptación
    cookieAcceptButton.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'true');
        cookieConsent.style.display = 'none';
    });
});

//Esta funcion es para enviar emails

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "80W0SjP28fNJTdSHa",
    });
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_vwrp0te', 'template_c3yup8p', this)
            .then(() => {
                // Mostrar mensaje de éxito
                document.getElementById('status-message').innerText = '¡Mensaje enviado con éxito!';
                document.getElementById('status-message').style.color = 'green';
            }, (error) => {
                // Mostrar mensaje de error
                document.getElementById('status-message').innerText = 'Hubo un problema al enviar el mensaje.';
                document.getElementById('status-message').style.color = 'red';
                console.log('FAILED...', error);
            });

        // Resetear el formulario
        this.reset();
    });
}