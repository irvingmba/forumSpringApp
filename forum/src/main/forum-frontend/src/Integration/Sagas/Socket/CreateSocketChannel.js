import { eventChannel } from "redux-saga";

function createSocketChannel(client, token) {
  return eventChannel((emit) => {
    // client.connect({Authorization: `Bearer ${token}`}, function (frame) {
    //   console.log("connected");
    // });

    const subscriptionTopic = client.subscribe("/topic/new", (e) => {
      console.log("topic",e);
    });

    const unsubscribe = () => {
      subscriptionTopic.unsubscribe();
      client.deactivate();
      console.log("disconnected");
    };

    return unsubscribe;
  });
}

export default createSocketChannel;
