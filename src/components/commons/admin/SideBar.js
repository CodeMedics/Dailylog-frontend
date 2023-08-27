import { Navigate, useNavigate } from 'react-router-dom';

import '../../../css/admin-sidebar.css'

function AdminSidebar() {

    const navigate = useNavigate();

    return (
        <div className="admin-sidebar">
        
            <a onClick={() => navigate("/admin")}>
                <h3>Harulog</h3>
            </a>

            <div>
                <a onClick={() => navigate("/admin/user")}>
                    <span>회원 관리</span>
                </a>
            </div>

            <div>
                <a onClick={() => navigate("/admin/feed")}>
                    <span>피드 관리</span>
                </a>
            </div>


            <div>
                <a onClick={() => navigate("/admin/report/feed")}>
                    <span>피드 신고 관리</span>
                </a>
            </div>


            <div>
                <a onClick={() => navigate("/admin/report/comment")}>
                    <span>댓글 신고 관리</span>
                </a>
            </div>

            <div>
                <a onClick={() => navigate("/admin/feedback")}>
                <span>사용자 피드백</span>
                </a>
            </div>
        </div>
    );
}

export default AdminSidebar;