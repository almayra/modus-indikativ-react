import React, { ReactNode } from "react";
import Metadata from "../Typography/Metadata";

interface IChatBottomText {
  children: ReactNode;
  className?: string;
}

export const ChatBottomText = ({ children, className }: IChatBottomText) => {
  return (
    <Metadata className={className} variant="01">
      {children}
    </Metadata>
  );
};

export default ChatBottomText;
