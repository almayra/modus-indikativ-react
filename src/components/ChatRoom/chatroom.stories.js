import { ChatRoom } from "./ChatRoom";
import { Document16, Download16 } from "@carbon/icons-react";
import FILE from "../../assets/images/filepreview.png";
import Grid from "../Layout/Grid/Grid";

export const Playground = (args) => <ChatRoom {...args} />;
Playground.args = {
  name: "Name",
  time: "00.00",
  messageText: "Message Text",
  append: <Download16 />,
  img: FILE,
  sender: "inbound-chat",
};

export const ChatLinkText = () => (
  <ChatRoom
    name="Name"
    time="00.00"
    messageText="document.jpg"
    prepend={<Document16 />}
    linkText
  />
);

export const BubbleChat = () => (
  <Grid container spacing="01">
    <Grid item xs={12} sm={12} md={6} lg={6}>
      <ChatRoom name="Name" time="00.00" messageText="Message Text" />
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={3}>
      <ChatRoom
        name="Name"
        time="00.00"
        messageText="Message Text"
        sender="outbound-chat"
      />
    </Grid>
  </Grid>
);

export const WithImage = () => (
  <ChatRoom
    name="Name"
    time="00.00"
    messageText="Document.pdf"
    prepend={<Document16 />}
    append={<Download16 />}
    img={FILE}
  />
);

const ChatRoomStory = {
  title: "Organism/Chat Room",
  component: ChatRoom,
};

export default ChatRoomStory;
