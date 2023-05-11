import { Outlet } from 'react-router-dom';
import Header from './Header';

export const Layout = ({ children }: any) => {
    return (
        <div>
        <Header />
        <div>
                <Outlet />
                {children}
        </div>
        {/* <Footer /> */}
        </div>
    )
}
