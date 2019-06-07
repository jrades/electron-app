const {app, BrowserWindow} = require('electron');
const url = require('url');
const electron = require('electron')
const path = require('path')


function boot() {
    mainWin = new BrowserWindow({
        show: false,
        frame: false,
        minWidth: 800,
        minHeight: 600,
        backgroundColor: "#000000",
        icon: "favicon.ico",
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWin.loadURL(url.format({
        pathname: 'index.html', slashes: true
    }))

    mainWin.once('ready-to-show', () => {
        mainWin.show()
    })

    // Emitted when the window is closed.
    mainWin.on('closed', function(){
    //Dereference the window object, usually would store windows in an array if app supports multi windows, this is the time when you should deleite the corresponding element. 
        mainWin = null
    })

}

app.on('ready', boot);



// ------------ Menu ------------------ // 
/*
const Menu = electron.Menu

app.on('ready', function(){
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
})

let template = [{
    label: 'Menu 1', 
    submenu: [{
        label: 'Menu item 1'
    }]
}]
*/