import { app, BrowserWindow } from "electron";
import { join } from "path"

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        titleBarStyle:"hiddenInset",
    })
    
    //win.menuBarVisible = false;
    //win.loadFile('src/renderer/index.html');


    // Load the local URL for development or the local
    // html file for production
    if (!app.isPackaged && process.env['ELECTRON_RENDERER_URL']) {
        win.loadURL(process.env['ELECTRON_RENDERER_URL'])
    } else {
        win.loadFile(join(__dirname, '../renderer/index.html'))
    }
}


app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    console.log("closed");

    if (process.platform !== 'darwin') app.quit()
})