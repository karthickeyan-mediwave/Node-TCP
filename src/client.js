const net = require("net");

const client = net.createConnection({ port: 8081 }, () => {
  console.log("Connected to server");
  client.write("Hello from client side is the message");
});

client.on("data", (data) => {
  console.log(`Received: ${data}`);
  client.end();
});

client.on("end", () => {
  console.log("Disconnected from server");
});
