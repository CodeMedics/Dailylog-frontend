import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/admin-layout";
import AdminFeedReportList from "./pages/admin-feedreport";
import AdminCommentReportList from "./pages/admin-commentreport";

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/admin" element={<Layout/>}>
        <Route path="/admin/report/feed" element={<AdminFeedReportList/>} />

        <Route path="/admin/report/comment" element={<AdminCommentReportList/>} />
      </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
