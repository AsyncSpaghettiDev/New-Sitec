const changePassword = document.querySelector('#changePassword');
const changeEmail = document.querySelector('#changeEmail');
const container = document.querySelector('.updater__container');

const passwordInfo = {
    title: 'Cambiar Clave',
    description: 'Aquí cambia tu contraseña por una que te sea más fácil recordar.',
    placeholder1: 'Clave Nueva',
    placeholder2: 'Confirmar Clave',
    label: 'Por favor escribe la clave nueva de 6 a 10 caracteres.'
}

const emailInfo = {
    title: 'Actualizar correo',
    description: 'Debes actualizar tu correo para que puedas realizar el proceso de reinscripción.',
    placeholder1: 'Correo Nuevo',
    placeholder2: 'Confirmar correo'
}

changePassword.addEventListener('click', e => {
    container.classList.toggle('updater--visible');
    changeTemplate(passwordInfo);
});

changeEmail.addEventListener('click', e => {
    container.classList.toggle('updater--visible');
    changeTemplate(emailInfo);
});

container.addEventListener('click', e => {
    console.log(e);
    if (e.target.classList.contains('updater__container'))
        container.classList.toggle('updater--visible');
})

const changeTemplate = (info) => {
    container.querySelector('.updater-title').      textContent = info.title       ;
    container.querySelector('.updater-description').textContent = info.description ;
    container.querySelector('#newFieldInput').      placeholder = info.placeholder1;
    container.querySelector('#confirmFieldInput').  placeholder = info.placeholder2;
    container.querySelectorAll('.input-label').     textContent = info.label ? info.label : null;
}