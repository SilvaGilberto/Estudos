function carregar() {
    let data = new Date();
    let hora = data.getHours();
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora > 0 && hora < 12) {
        img.src = 'midia/manha.jpg';
        document.body.style.background = '#F1C2A0';
    } else if (hora >= 12 && hora < 18) {
        img.src = 'midia/tarde.jpg';
        document.body.style.background = '#7D4A46';
    } else {
        img.src = 'midia/noite.jpg';
    };
};