import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout() {

    const { pathname } = useLocation();

    return (
        <div className="flex bg-app-bg">
            <div id="sidebar" className="h-[100vh] w-[300px] bg-primary fixed left-0 top-0 hidden md:block">
                <Sidebar />
            </div>
            <div className="md:w-[calc(100vw-300px)] md:ml-[300px]">
                <Header />


                <div className="p-[25px]">
                <div>
                    <p className="capitalize text-highlight font-600 text-[26px]">{pathname == "/" ? "Dashboard" : pathname.split('/')[pathname.split('/').length - 1]}</p>
                </div>
                <Outlet />
                </div>
            </div>
        </div>
    );
}