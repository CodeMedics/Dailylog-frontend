import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../css/admin-report.css';
import '../css/admin-sidebar.css';

function AdminFeedReportList() {

    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const userReducer = useSelector(state => state.userReducer);


    return (
        <div className='maincontainer'>

            <div className='admin-page'>
                
                <h1 className='page-title'>피드 신고 리스트</h1>
                <div className='admin-feed-report-list'>
                    <table className="admin-table" width="50%">
                        <thead>
                            <tr>
                                <th>신고번호</th>
                                <th>닉네임</th>
                                <th>신고일</th>
                                <th>신고내용</th>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            
                            <td>1</td>
                            <td>효덩</td>
                            <td>2023.08.24</td>
                            <td>부적절한 닉네임</td>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminFeedReportList;