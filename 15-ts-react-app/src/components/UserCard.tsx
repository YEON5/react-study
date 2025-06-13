type User = {
    name: string;
    age: number;
    email: string;
}

function UserCard({ name, age, email }: User) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '0 0 1rem 0' }}>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{email}</p>
        </div>
    );
}

export default UserCard;