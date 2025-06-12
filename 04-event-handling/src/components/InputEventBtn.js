import React from "react";

// 인풋 포커스 인/아웃  |  버튼 마우스 오버/아웃  |  인풋 값변경, 버튼 클릭
function InputEventBtn() {
    // 값 변경
    function handleChange(event) {
        console.log(event.target.value);
    }

    function handleClick(event) {
        console.log(event.target.value);
    }

    //-----------------------------------------------

    /* 작성 방식은 둘다 같은 방식 */
    // function 변수명() {} | const 변수명 = () => {}

    //-----------------------------------------------

    // 인풋 포커스 인/아웃
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


    // 마우스 오버/아웃
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

export default InputEventBtn;