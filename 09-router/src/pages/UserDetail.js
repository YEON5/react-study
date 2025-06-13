import { useParams } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  return (
    <div>
        <h2>사용자 ID: {id}</h2>
    </div>
  )
}

export default UserDetail;