import React from "react";

function InputEvent() {
    function handleChange(event) {
        console.log(event.target.value);
    }

    function handleClick(event) {
        console.log(event.target.value);
    }

    // 둘다 같은 방식
    // function 변수명() {} | const 변수명 = () => {}
    function handleFoucs() {
        console.log('input handleFoucs')
    }
    // const handleFoucs = () => {
    //     console.log('input handleFoucs')
    // }

    function handleBlur() {
        console.log('input handleBlur')
    }
    // const handleBlur = () => {
    //     console.log('input handleBlur')
    // }

    function handleMouseOver() {
        console.log('btn handleMouseOver')
    }

    function handleMouseOut() {
        console.log('btn handleMouseOut')
    }

    return (
        <div>
            <input type="text" onChange={handleChange} onBlur={handleBlur} onFocus={handleFoucs}/>
            <button onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>클릭</button>
        </div>

    )

 }

export default InputEvent;