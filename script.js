let notif = document.querySelector('.notif')
let succes = document.getElementById('succes')
let warn = document.getElementById('warning')
let info = document.getElementById('info')
let error = document.getElementById('error')
let close = document.querySelector('.close')

function createToast(type, icon, title, text) {
    let newToast = document.createElement('div');
    newToast.innerHTML = `
    <div class="toast ${type}">
        <i class="${icon}"></i>
        <div class="content">
            <h2>${title}</h2>
            <span>${text}</span>
        </div>
        <i class="close fa-solid fa-xmark"></i>
    </div>`;
    
    let closeButton = newToast.querySelector('.close');
    closeButton.addEventListener("click", function() {
        newToast.classList.add('hide');
        setTimeout(() => {
            newToast.remove();
        }, 500);
        
        clearTimeout(newToast.timeOut);
    });

    notif.appendChild(newToast);

    newToast.timeOut = setTimeout(() => {
        newToast.classList.add('hide');
        setTimeout(() => newToast.remove(), 500);
    }, 5000);
}

succes.addEventListener("click", function() {
    let type = 'succes';
    let icon = 'fa-solid fa-check';
    let title = 'Réussite';
    let text = 'Ce toast fonctionne bien';
    createToast(type, icon, title, text);
});

warn.addEventListener("click", function() {
    let type = 'warning';
    let icon = 'fa-solid fa-triangle-exclamation';
    let title = 'Attention';
    let text = 'Il faut faire attention';
    createToast(type, icon, title, text);
});

info.addEventListener("click", function() {
    let type = 'info';
    let icon = 'fa-solid fa-circle-info';
    let title = 'Information';
    let text = 'Voici une information';
    createToast(type, icon, title, text);
});

error.addEventListener("click", function() {
    let type = 'error';
    let icon = 'fa-solid fa-circle-exclamation';
    let title = 'Erreur';
    let text = 'Voici une erreur';
    createToast(type, icon, title, text);
});


