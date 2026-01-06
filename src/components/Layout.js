import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const Layout = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-grow-1 my-4 my-lg-5">
                <div className="container bg-white rounded shadow-sm p-3 p-md-4">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;