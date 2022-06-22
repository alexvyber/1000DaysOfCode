import * as net from "node:net";

// console.log(net)

const HOSTNAME = "localhost";
const PORT = 3000;

net
  .createServer((socket) => {
    // console.log("client connected to socket", Object.keys(socket));

    socket.on("data", (data) => {
      console.log(data.toString().trim());
      socket.write(`This is the data: ${data}`);
    });
  })
  .listen(PORT, HOSTNAME);
