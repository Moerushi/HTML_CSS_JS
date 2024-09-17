import { useState } from "react";

function ToDoList() {

    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([]);

    const updateText = (e) => {
        setValue(e.target.value);
    }

    const addList = () => {
        if (value.trim() === '') {
            setValue('');
            return;
        }
        // const newArray = [...messages, {value, id: new Date()}];
        // или
        const newArray = [...messages, {value, id: crypto.randomUUID()}];
        setMessages(newArray);
        setValue('');
    }

    return (
        <div>
            <input type="text" placeholder="Input text" onChange={updateText} value={value}></input>
            <button onClick={addList}>Add item</button>
            <ul>
                {messages.map((message) => <li key={message.id}>{message.value}</li>)}
            </ul>
        </div>
    );
}

export default ToDoList;