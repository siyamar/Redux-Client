
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';

const Root = () => {
    return (
        <div className='font-poppins max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;