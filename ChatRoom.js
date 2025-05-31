import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [client, setClient] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/chat');
    const stompClient = Stomp.over(socket);
    stompClient.connect({}, () => {
      stompClient.subscribe('/topic/messages', (msg) => {
        const body = JSON.parse(msg.body);
        setMessages(prev => [...prev, body]);
      });
    });
    setClient(stompClient);
    return () => stompClient.disconnect();
  }, []);

  const sendMessage = () => {
    client.send('/app/send', {}, JSON.stringify({ sender: "User1", content: text }));
    setText("");
  };

  return (
    <div>
      <h2>Public Chat Room</h2>
      {messages.map((msg, index) => (
        <div key={index}><strong>{msg.sender}:</strong> {msg.content}</div>
      ))}
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatRoom;
