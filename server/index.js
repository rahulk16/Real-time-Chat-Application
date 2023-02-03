const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors);

const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		methods: ["*"],
	},
});

io.on("connection", (socket) => {
	console.log(`Connection Established with socket Id: ${socket.id}`);
});

server.listen(4000, () => {
	console.log(`Server is running`);
});
