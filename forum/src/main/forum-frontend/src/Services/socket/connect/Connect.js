import { Stomp } from "stomp";
import SockJS from "sockjs-client";

function connect() {
  const socket = new SockJS("/socket");
  const stompClient = Stomp.over(socket);
  //   return new Promise((res) => {
  //     socket.on("connection", () => {
  //       console.log("Socket connected");
  //       res(socket);
  //     });
  //   });
  return stompClient;
}

export default connect;
