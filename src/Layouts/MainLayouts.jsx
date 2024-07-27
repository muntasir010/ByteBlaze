import { Outlet } from 'react-router-dom';
import Nav from '../Components/Nav'
import Footer from '../Components/Footer';

const MainLayouts = () => {
    return (
        <div>
            <div className="h-16">
                <Nav />
            </div>
            <div className="min-h-[calc(100vh-116px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayouts;