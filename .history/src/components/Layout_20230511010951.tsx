import { Outlet } from 'react-router-dom';
import Header from './Header';
// import Container from '../04-layouts/Container';

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
