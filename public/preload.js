// preload.js
const { contextBridge, remote } = require('electron');

contextBridge.exposeInMainWorld('_remote', remote);
