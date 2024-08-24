const { PeerServer } = require("peer");
var ip = require("ip");

const peer = PeerServer(/* listener,  */{ 
    host: '192.168.2.3', 
    port: 9000, 
    path: "/peer-server",
    key: 'secretkey',
    allow_discovery: true,
    config: {iceServers:[{url:''}]}
});

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
