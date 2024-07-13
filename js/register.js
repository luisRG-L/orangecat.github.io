document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerform');
     
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;

        if (validateForm(username, password, email)) {
            alert('Registro exitoso');
            registrationForm.reset();
        } else {
            alert('Por favor complete todos los campos correctamente');
        }
    });

    function validateForm(username, password, email) {
        if (username && password && email) {
            return true;
        }
        return false;
    }
})