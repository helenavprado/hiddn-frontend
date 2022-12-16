import io from "socket.io-client";
import MainPage from "./components/pages/MainPage/MainPage.js";

const socket = io.connect("http://localhost:3002");

function App() {
  return (
    <div>
      <MainPage socket={socket}></MainPage>
    </div>
  );
}

export default App;
