import { eventChannel } from "redux-saga";

function createSocketChannel(client, token) {
  return eventChannel((emit) => {

    client.connect({Authorization: `Bearer ${token}`}, function (frame) {
      console.log("connected");
    });

    client.subscribe("/topic/posts", function (msg) {
      console.log(msg);
      emit(msg);
    });

    const unsubscribe = () => {
      client.disconect();
      console.log("disconnected");
    };
    console.log("done channel");

    return unsubscribe;
  });
}

export default createSocketChannel;
