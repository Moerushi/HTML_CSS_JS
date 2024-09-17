import { useState } from "react";

function TextInput() {

    const [value, setValue] = useState('');

    const handlerChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <input type="text" onChange={handlerChange}/>
            <p>{value}</p>
        </div>
    );
}

export default TextInput;