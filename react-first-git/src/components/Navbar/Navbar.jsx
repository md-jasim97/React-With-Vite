
import { Fragment } from 'react';
import './Navbar.css';
import LoginLogOut from './LoginLogOut';
const Navbar = () => {
    return (
        <Fragment>
            <nav>
                <div className='Cname'>JTech</div>
                <LoginLogOut/>
            </nav>
        </Fragment>
    );
};

export default Navbar;