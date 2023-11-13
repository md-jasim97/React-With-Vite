
import { Fragment, useState } from 'react';
import './Navbar.css';
import LogInLogOut from './LogInLogOut';
const Navbar = () => {
    const [isLogIn, setIsLogIn] = useState(false);

    const update = ()=>{
        setIsLogIn(!isLogIn)
    }

    return (
        <Fragment>
            <nav>
                <div className='Cname'>JTech</div>
                <LogInLogOut isLogIn={isLogIn}
                updateData ={update}/>
            </nav>
        </Fragment>
    );
};

export default Navbar;