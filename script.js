const btn_lang = document.querySelector('#btn_lang');
const btn_lib = document.querySelector('#btn_lib');
const btn_tls = document.querySelector('#btn_tls');
const btn_des = document.querySelector('#btn_des');
const elements = document.querySelectorAll('.page');
const languages = document.querySelector('#languages');
const libraries = document.querySelector('#libraries');
const tools = document.querySelector('#tools');
const design = document.querySelector('#design');
const buttons = document.querySelectorAll('.button');

btn_lang.addEventListener('click', function() {

    buttons.forEach(function(button) {
        button.classList.remove('open');
    })
    if (libraries.classList.contains('fade-in')) {
        libraries.classList.remove('fade-in');
        libraries.classList.add('fade-out');
    } else if (tools.classList.contains('fade-in')) {
        tools.classList.remove('fade-in');
        tools.classList.add('fade-out');
    } else if (design.classList.contains('fade-in')) {
        design.classList.remove('fade-in');
        design.classList.add('fade-out');
    }
    btn_lang.classList.add('open');
    languages.classList.remove('fade-out');
    languages.classList.add('fade-in');

});

btn_lib.addEventListener('click', function() {

    buttons.forEach(function(button) {
        button.classList.remove('open');
    })
    if (languages.classList.contains('fade-in')) {
        languages.classList.remove('fade-in');
        languages.classList.add('fade-out');
    } else if (tools.classList.contains('fade-in')) {
        tools.classList.remove('fade-in');
        tools.classList.add('fade-out');
    } else if (design.classList.contains('fade-in')) {
        design.classList.remove('fade-in');
        design.classList.add('fade-out');
    }
    btn_lib.classList.add('open');
    libraries.classList.remove('fade-out');
    libraries.classList.add('fade-in');

});

btn_tls.addEventListener('click', function() {

    buttons.forEach(function(button) {
        button.classList.remove('open');
    })
    if (languages.classList.contains('fade-in')) {
        languages.classList.remove('fade-in');
        languages.classList.add('fade-out');
    } else if (libraries.classList.contains('fade-in')) {
        libraries.classList.remove('fade-in');
        libraries.classList.add('fade-out');
    } else if (design.classList.contains('fade-in')) {
        design.classList.remove('fade-in');
        design.classList.add('fade-out');
    }
    btn_tls.classList.add('open');
    tools.classList.remove('fade-out');
    tools.classList.add('fade-in');

});

btn_des.addEventListener('click', function() {

    buttons.forEach(function(button) {
        button.classList.remove('open');
    })
    if (languages.classList.contains('fade-in')) {
        languages.classList.remove('fade-in');
        languages.classList.add('fade-out');
    } else if (tools.classList.contains('fade-in')) {
        tools.classList.remove('fade-in');
        tools.classList.add('fade-out');
    } else if (libraries.classList.contains('fade-in')) {
        libraries.classList.remove('fade-in');
        libraries.classList.add('fade-out');
    }
    btn_des.classList.add('open');
    design.classList.remove('fade-out');
    design.classList.add('fade-in');

});