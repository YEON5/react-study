import React, { useState } from 'react';

function CounterHooks() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>함수형 카운터 : {count}</h2>
            <button onClick={() => setCount(count + 1)}>+1 증가</button>
            <button onClick={() => setCount(count - 1)}>-1 증가</button>
        </div>
    );
}

export default CounterHooks;