import React from "react";

function User(props) {
    return (
        <div>
            <h2>사용자 정보</h2>
            <p>이름: {props.name}</p>
            <p>나이: {props.age}</p>
        </div>
    );
}

export default User;