const { app, BrowserWindow } = require('electron')
const { PeerServer } = require("peer");

var ip = require("ip");
console.log ( ip.address() );

async function log2server(){
    const response = await fetch(
        // post local ip address to MoMo server app
        'http://blueberry.local:1024', 
        {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ip: ip.address()})
        }
    );
    const data = await response.json();
    console.log(data);
}

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
  }

  log2server();

  const peer = PeerServer(/* listener,  */{ host: ip.address(), port: 9000, path: "/myapp" });

  //peer.on("connection", console.log)
  peer.on("connection", (obj) => { console.log( obj.id )})
  peer.on("connection", (client) => {
    peer.on('disconnected', (id) => {
        console.log('Left2: ', id);
    });
    peer.on("error", (obj) => {
        console.log("Error", obj);
    });
  });

  app.whenReady().then(() => {
    createWindow()
  })