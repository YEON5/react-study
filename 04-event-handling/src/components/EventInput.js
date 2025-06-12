import React, {useState} from "react";

// 인풋 입력
function EventInput() {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
        console.log('입력값:', e.target.value);
    };

    return (
        <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="입력하세요"
        />
    );
} 

export default EventInput;