import { app, BrowserWindow } from "electron";

app.whenReady().then(() => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
        resizable: false,
    });
    window.loadURL("http://localhost:8080");
});
