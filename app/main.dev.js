const {app, BrowserWindow, ipcMain, Tray, nativeImage } = require('electron');
require('electron-debug')();
const path = require('path');

let tray = null;
let window = null;
let TRAY_ARROW_HEIGHT = 50;

// Don't show the app in the doc
//app.dock.hide()

app.on('ready', () => {
  createTray()
  createWindow()
})

const createTray = () => {
  const iconPath = path.join(__dirname, 'cloudTemplate.png');
  let trayIcon = nativeImage.createFromPath(iconPath);
  trayIcon = trayIcon.resize({ width: 16, height: 12 });
  tray = new Tray(trayIcon)
  tray.on('right-click', toggleWindow)
  tray.on('double-click', toggleWindow)
  tray.on('click', function (event) {
    toggleWindow()

    // Show devtools when command clicked
    if (window.isVisible() && process.defaultApp && event.metaKey) {
      window.openDevTools({mode: 'detach'})
    }
  })
}

const getWindowPosition = () => {
  const windowBounds = window.getBounds();
  const trayBounds = tray.getBounds();

  // Center window horizontally below the tray icon
  const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2));

  // Position window 4 pixels vertically below the tray icon
  const y = Math.round(trayBounds.y + trayBounds.height + 4);

  return {x: x, y: y};
}

const createWindow = () => {
  window = new BrowserWindow({
    width: 320,
    height: 450,
    show: false,
    frame: false,
    fullscreenable: false,
    resizable: false,
    transparent: true,
    webPreferences: {
      backgroundThrottling: false
    }
  })
  window.loadURL(`file://${__dirname}/app.html`);

  // Hide the window when it loses focus
  window.on('blur', () => {
    if (!window.webContents.isDevToolsOpened()) {
      window.hide()
    }
  })
}

const toggleWindow = async () => (
  window.isVisible() ? window.hide() : showWindow()
)

const showWindow = () => {
  const position = getWindowPosition();
  window.setPosition(position.x, position.y);
  window.show();
}

ipcMain.on('show-window', () => {
  showWindow()
})

ipcMain.on('close-main-window', () => {
    app.quit();
});