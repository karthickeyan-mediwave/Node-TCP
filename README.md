# Node.js TCP Socket — Server & Client

A simple TCP server and client built with the Node.js built-in **`net`** module. No external dependencies required.

---

## Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher

---

## References

### TCP vs UDP with Node.js Examples

**Source:** [dev.to/kernelrb/tcp-vs-udp-with-nodejs-examples-43oc](https://dev.to/kernelrb/tcp-vs-udp-with-nodejs-examples-43oc)

#### Introduction

In the realm of computer networks, communication between devices is facilitated by a set of rules known as **network protocols**. These protocols define how data is formatted, transmitted, and received, ensuring that devices across different platforms and locations can communicate effectively. Among the many protocols used, two of the most fundamental are **TCP (Transmission Control Protocol)** and **UDP (User Datagram Protocol)**.

Understanding the differences between TCP and UDP is crucial for developers and network engineers. Each protocol has its own strengths and weaknesses, making them suitable for different types of applications:

- **TCP's reliability** is vital for applications where data integrity and order are crucial — e.g. web browsing and email.
- **UDP's low latency** is essential for applications that prioritize speed over reliability — e.g. live video streaming and online gaming.

---

#### TCP (Transmission Control Protocol)

TCP is a core protocol of the Internet Protocol (IP) suite. Its primary purpose is to provide **reliable, ordered, and error-checked** delivery of data between applications.

| Feature                 | Description                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------- |
| **Connection-Oriented** | Establishes a connection before transmitting data; stays open until both sides finish |
| **Reliable Delivery**   | Guarantees data arrives without loss, duplication, or reordering                      |
| **Error Checking**      | Uses checksums to detect errors; retransmits lost or corrupted packets                |
| **Flow Control**        | Manages transmission rate to prevent fast senders from overwhelming slow receivers    |

**Common use cases:** Web browsing (HTTP/HTTPS), Email (SMTP, IMAP), File transfer (FTP)

---

#### Implementing TCP in Node.js

Node.js provides the built-in **`net`** module for creating TCP servers and clients.

| API                      | Description                                                         |
| ------------------------ | ------------------------------------------------------------------- |
| `net.createServer()`     | Creates a TCP server; callback fires for each new client connection |
| `net.createConnection()` | Establishes a TCP connection to a server; returns a socket object   |

---

## How to Run

Open **two separate terminals**.

### Terminal 1 — Start the Server

```bash
npm run server
# or
node src/server.js
```

**Expected output:**

```
TCP server listening on port 8081
```

### Terminal 2 — Start the Client

```bash
npm run client
# or
node src/client.js
```

**Expected output (client):**

```
Connected to server
Received: Hello from server side to client
Disconnected from server
```

**Expected output (server):**

```
TCP server listening on port 8081
Client connected
Received: Hello from client side is the message
Client disconnected
```

---

## How It Works

| Step | Description                                                                                  |
| ---- | -------------------------------------------------------------------------------------------- |
| 1    | Server starts and listens on **port 8081**                                                   |
| 2    | Client connects to `localhost:8081`                                                          |
| 3    | Client sends `"Hello from client side is the message"`                                       |
| 4    | Server receives the message, logs it, and responds with `"Hello from server side to client"` |
| 5    | Client receives the response, logs it, then closes the connection                            |
| 6    | Server detects the disconnect and logs `"Client disconnected"`                               |

---

## npm Scripts

| Script           | Command              | Description          |
| ---------------- | -------------------- | -------------------- |
| `npm run server` | `node src/server.js` | Start the TCP server |
| `npm run client` | `node src/client.js` | Run the TCP client   |

---

## Key Concepts

- **`net.createServer()`** — creates a TCP server; callback fires for each new connection
- **`net.createConnection()`** — opens a TCP connection to the server
- **`socket.write()`** — sends data over the TCP connection
- **`socket.on('data')`** — fires when data arrives from the other end
- **`socket.end()`** — signals the end of the connection (half-close)

---

## License

ISC
