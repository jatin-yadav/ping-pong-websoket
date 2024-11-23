import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function (soket) {
  console.log("user connected");
  //   setInterval(() => {
  //     soket.send("Current Price of solana 52.36");
  //   }, 1000);

  soket.on("message", (e) => {
    if (e.toString() === "ping") {
      soket.send("pong");
    }
  });
});

// wss.on('connection', function connection(ws) {
//   ws.on('error', console.error);

//   ws.on('message', function message(data, isBinary) {
//     wss.clients.forEach(function each(client) {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(data, { binary: isBinary });
//       }
//     });
//   });
// });

//
