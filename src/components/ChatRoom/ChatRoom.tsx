import React, { CSSProperties, ReactNode } from "react";
import "./chatroom.scss";
import ChatBottomText from "./ChatBottomText";
import BodyShort from "../Typography/BodyShort";

interface IChatRoom {
  sender: "outbound-chat" | "inbound-chat";
  name: string;
  time: string;
  messageText: string;
  prepend?: ReactNode;
  append?: ReactNode;
  img?: string;
  linkText?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const ChatRoom = ({
  name,
  time,
  messageText,
  prepend,
  append,
  img,
  linkText,
  sender = "inbound-chat",
  className,
  style,
}: IChatRoom) => {
  return (
    <div className={`chat-room ${sender} ${className}`} style={style}>
      <div className="bubble">
        {img ? (
          // <div className={` ${img ? "with-image" : ""}`}>{img}</div>
          <img alt="foto" src={img} className="with-image" />
        ) : null}
        <div className="text-message">
          {prepend ? <span className="icon prepend">{prepend} </span> : ""}
          <BodyShort className={`text-message ${linkText ? "link" : ""}`}>
            {messageText}
          </BodyShort>
          {append ? <span className="icon append">{append}</span> : ""}
        </div>
      </div>
      <ChatBottomText className="bottom-text">
        {name} • {time}
      </ChatBottomText>
    </div>
  );
};

export default ChatRoom;
