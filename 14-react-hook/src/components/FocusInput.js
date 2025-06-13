import { useRef } from "react";

export default function FocusInput() {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="입력하세요" />
            <button onClick={handleClick}>포커스이동</button>
        </div>
    )
}

// export default FocusInput;