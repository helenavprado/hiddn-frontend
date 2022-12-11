import MainPage from "./components/pages/MainPage/MainPage.js";
import io from "socket.io-client";
import { useState } from "react";

const socket = io.connect("http://localhost:3002");

function App() {
  const [room, setRoom] = useState("");

  const goButton = () => {
    socket.emit("join_room", room);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="room id"
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      ></input>
      <button onClick={goButton}>go</button>
      <MainPage socket={socket} room={room}></MainPage>
    </div>
  );
}

export default App;
