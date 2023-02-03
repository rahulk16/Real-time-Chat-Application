import "./App.css";
import io from "socket.io-client";

// Establish connection with socke.io server
const socket = io.connect("http://localhost:4000");

function App() {
	return (
		<div className="App">
			<p>{socket.id}</p>
		</div>
	);
}

export default App;
