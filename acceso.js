const form = document.querySelector('form');

form.addEventListener('submit', e => {
    let pass = false;
    if (e.target[0].value == '' || isNaN(e.target[0].value) || e.target[0].value.length != 8) {
        e.target[0].labels[0].className = 'label incorrect';
        pass = false;
    }
    else {
        e.target[0].labels[0].className = 'label';
        pass = true;
    }
    if (e.target[1].value == '') {
        e.target[1].labels[0].className = 'label incorrect';
        pass = false;
    }
    else {
        e.target[1].labels[0].className = 'label';
        pass = pass && true;
    }
    e.preventDefault();
    if (pass) window.location.href = window.location.origin + '/panel.html';

})