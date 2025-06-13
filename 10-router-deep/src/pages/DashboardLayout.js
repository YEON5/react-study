import { Link, Outlet } from 'react-router-dom';

function DashboardLayout() {
    return (
        <div>
            <h2>📊 대시보드</h2>
            <nav>
                <Link to="profile">프로필</Link> | <Link to="settings">설정</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default DashboardLayout;