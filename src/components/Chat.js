import React from "react";
import styled from "styled-components";

function Chat() {
  return (
    <div>
      <ChatContainer>
        <h1> I am the Chat screen </h1>
      </ChatContainer>
    </div>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
