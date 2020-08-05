import { app, BrowserWindow } from "electron";
import fs from "fs";
import path from "path";

app.whenReady().then(() => {
    const window = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        },
        resizable: false,
    });
    window.maximize();

    //
    // 빌드된 파일이 존재한다면 그것을 불러온다.
    const reactPath = path.join(__dirname, "../../dist/react");
    const indexPath = path.join(__dirname, "../../index.html");
    if (fs.existsSync(reactPath)) {
        window.loadFile(indexPath);
    } else {
        window.loadURL("http://localhost:8080");
    }
});
