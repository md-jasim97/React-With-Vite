import React, { useState } from 'react';
import './login.css'
const LogIn = () => {


    // password visiable and hidden
    let [isPassShow, setIsPassShow] = useState(false);
    const showPass = ()=>{
        setIsPassShow(!isPassShow)
    }


// Username and password store
    const [isUser, setIsUser] = useState({
        UserName : "",
        password : ""
    })

// handle Username
  /*  const handleUser = (user)=>{
        setIsUser({
            UserName : user.target.value,
            pasword : isUser.password
        })
    }
*/

// Handle Password
 /*   const handlePass=(pass)=>{
        setIsUser({
            UserName : isUser.UserName,
            password : pass.target.value
        })
    }
*/

// Ond function called and hendler any feild
    const inputFeildHandle = (event, fieldname)=>{
        setIsUser({
            ...isUser,
            [fieldname] : event.target.value
        })
    }


    const noRefress=(e)=>{
        e.preventDefault();
    }


    return (
        <div className='loginForm'>
            <form onSubmit={noRefress}>
            <div className="logInContainer">
                <h1>LogIn</h1>

                <div className="name">
                    <label> Email : </label>
                    <input onChange={(e)=>inputFeildHandle(e, 'UserName')} className='inputData' type="text" placeholder='Usename or Email' />
                </div>

                <div className="passwordFill">
                    <label> Password : </label>
                    <input onChange={(e)=>inputFeildHandle(e,'password')}  className='inputData' type={isPassShow?"text":"password"} placeholder='password'/>
                    <button onClick={showPass} className='showPass'>Show</button>
                </div>

                <button type='Submit'>Submit</button>
                <br/><br/>

                <div>
                    <h1>User Name : {isUser.UserName}</h1>
                    <h1>Password : {isUser.password} </h1>
                </div>

            </div>
            </form>
            
            
        </div>
    );
};

export default LogIn;