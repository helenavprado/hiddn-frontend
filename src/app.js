import MainPage from "./components/pages/MainPage/MainPage.js";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3002");

function App() {
  return (
    <div>
      <MainPage socket={socket}></MainPage>
    </div>
  );
}

export default App;
