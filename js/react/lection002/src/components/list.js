import React, {useState} from 'react';

export function MessageList() {
    const [messages, setMessages] = useState([
        {id: 'id1', text: 'message 1', heading: 'heading 1'},
        {id: 'id2', text: 'message 2', heading: 'heading 2'},
        {id: 'id3', text: 'message 3', heading: 'heading 3'}
    ]);
    return messages.map((message) => (
        <div key={message.id}>
        <h2>{message.heading}</h2>
        <p>{message.text}</p>
        </div>
    ))
}

export default MessageList;