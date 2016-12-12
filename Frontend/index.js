const { app, BrowserWindow, Menu } = require('electron');

let mainWindow;


function createWindow (){
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL(`file://${__dirname}/frontend/index.html`);
  mainWindow.on('closed', function(){
    mainWindow = null;
  });
}

function createMenu (){
  const template = [
    {
      label: 'Electron',
      submenu: [
        {
          label: 'Quit',
          accelerator: 'CommandOrControl+Q',
          click: function() { app.quit(); }
        }
      ],
    },
    {
      label: 'Edit',
      submenu: [
        {
          label: 'Save',
          accelerator: 'CommandOrControl+S',
          click() {
            mainWindow.webContents.send('save');
          }
        },
        {
          label: 'Edit Mode',
          accelerator: 'Shift+CommandOrControl+E',
          click() {
            mainWindow.webContents.send('dispatch', { type: 'index/toggle_edit' });
          }
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'Command+R',
          click: function() { mainWindow.reload(); }
        },
        {
          label: 'Toggle Full Screen',
          accelerator: 'Shift+Command+F',
          click: function() { mainWindow.setFullScreen(!mainWindow.isFullScreen()); }
        },
        {
          label: 'Toggle Developer Tools',
          accelerator: 'Alt+Command+I',
          click: function() { mainWindow.toggleDevTools(); }
        },
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.on('ready', function(){
  createWindow();
  createMenu();
});

app.on('window-all-closed', function(){
  if(process.platform !== 'darwin'){
    app.quit();
  }
});

app.on('activate', function(){
  if(mainWindow === null){
    createWindow();
  }
});
