function abrir() {
    let menu = document.getElementById('menu')
    if (menu.classList.contains('teste') == true) {
        menu.classList.remove('teste')
    } else {
        menu.classList.add('teste')
    }
}