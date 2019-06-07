const {remote} = require('electron')
const fs = require('fs')

document.getElementById('close').addEventListener('click', closeWindow);
document.getElementById('minimize').addEventListener('click', minimizeWindow);

function closeWindow() {
    var window = remote.getCurrentWindow()
    window.close()
}

function minimizeWindow() {
    var window = remote.getCurrentWindow()
    window.minimize()
}