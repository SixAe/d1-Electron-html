const { app, BrowserWindow } = require("electron");
const path = require("node:path");
require("update-electron-app")();


const createWindow = () => {
  if (require("electron-squirrel-startup")) app.quit();
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("./pages/index.html");
  //   win.loadURL("https://nodejs.org");
};
app.on("ready", () => {
  createWindow();
  //   mac
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
  console.log("关闭了");
});
