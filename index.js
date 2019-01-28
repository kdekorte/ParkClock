const electron = require('electron')

const {app, BrowserWindow} = require('electron')

function createWindow() {
    win = new BrowserWindow({width: 800, 
            height: 600, 
            webPreferences: {
                nodeIntegration: false   
            }})

    win.setResizable(false);

    win.loadFile('index.html')
    win.on('closed', () => {
        win = null;
    })

    win.reload();
}

app.on('ready', createWindow);