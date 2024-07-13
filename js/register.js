document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerform');
     
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const password2 = document.getElementById('password2').value;
        const email = document.getElementById('email').value;

        validateForm(username, password, password2, email);
    });

    function validateForm(username, password, password2, email) {
        if (password != password2){
            alert("Las contraseñas deben coincidir")
        }else{
            alert('Registro exitoso');
            form.reset();
        }
    }
})

function tooglePassword(fieldId, imgId) {
    const passwordField = document.getElementById(fieldId);
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    const image = document.getElementById(imgId);
    const img = image.getAttribute('src') === '../../assets/show.svg' ? '../../assets/hind.svg': '../../assets/show.svg'
    image.setAttribute('src', img);
}