import { app, BrowserWindow } from "electron";

app.whenReady().then(() => {
    const window = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        },
        resizable: false,
    });
    window.maximize();
    window.loadURL("http://localhost:8080");
});
