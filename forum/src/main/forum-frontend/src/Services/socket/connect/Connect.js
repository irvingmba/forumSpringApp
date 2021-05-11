// import { io } from "socket.io-client";
import * as SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

function connect() {
  // const socket = io("/app/posts",{path:"/socket"});
  // console.log(socket);
  // return new Promise((res) => {
  //   socket.on("connect", () => {
  //     console.log("connected");
  //     res(socket);
  //   })
  // })
  const stompClient = new Client();
  stompClient.webSocketFactory = () => {
    return new SockJS("http://localhost:8080/socket");
  };
  // stompClient.subscribe
  stompClient.activate();
  return new Promise((res) => {
    stompClient.onConnect = (frame) => {
      console.log("connected");
      res(stompClient);
    }
  })
}

export default connect;
