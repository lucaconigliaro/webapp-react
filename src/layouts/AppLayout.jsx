import { Outlet } from "react-router-dom";
import AppHFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";

function AppLayout() {
    return (
        <>
            <AppHeader />
            <main className="container">
                <Outlet />
            </main>
            <AppHFooter />
        </>
    )
};

export default AppLayout;