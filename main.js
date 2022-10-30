const {app, BrowserWindow} = require('electron');
let win;

function createWindow() {
    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#ffffff',
    });

    win.maximize();
    win.show();

    win.loadURL('http://localhost:8100');
        // `file://${__dirname}/www/index.html`

    win.on('closed', function() {
        win = null;
    });
    return win;
}

app.on('ready', function() {
    const window = createWindow();
    window.webContents.openDevTools();
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function() {
    if (win === null) {
        createWindow();
    }
})