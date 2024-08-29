import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <div className='site-container'>
            <main>
                <Outlet />
            </main>
        </div>
    );
};
