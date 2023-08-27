import SideBar from "../components/commons/admin/SideBar";
import { Outlet } from "react-router-dom";

function Layout() {

    return (
        <>
            <SideBar/>
            <Outlet/>
        </>
    )
}

export default Layout;