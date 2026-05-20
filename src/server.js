const net = require("net");

const server = net.createServer((socket) => {
  console.log("Client connected");

  socket.on("data", (data) => {
    console.log(`Received: ${data}`);
    socket.write("Hello from server side to client");
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });
});

server.listen(8081, () => {
  console.log("TCP server listening on port 8081");
});
