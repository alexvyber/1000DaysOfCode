import * as net from "node:net";

const HOSTNAME = "localhost";
const PORT = 3000;

const socket = net.connect(PORT, HOSTNAME);

socket.write("Stupid katzen");

socket.on("data", (data) => console.log(data.toString()));
