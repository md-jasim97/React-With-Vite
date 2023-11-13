import React from 'react';

const LoginLogOut = () => {
    const isLogIn = true;
    return (
        <div>
            <div className="">
                {isLogIn?(<div className="profile-icon">
                    <img src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/337136839_5854203581368299_7969630753016429492_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEfVT3yrcqXknqM7zbMqwMd5Qf1wPK2U4flB_XA8rZTh5Zieu-baXUivKwIZb5nFmI3-FTlOocvwd_8GaihKZYE&_nc_ohc=cmoznjDakTYAX-15JLq&_nc_ht=scontent.fdac22-1.fna&oh=00_AfAkx_P-izpf81DPwDzGR_Xkrsj8vmqsUVUsclT2g76riA&oe=655700D6" alt="" />
                </div>):(
                <div className="logSign">
                    <button className='login-btn'>Login</button>
                    <button className='Sign-Up'>SignUp</button>
                </div>)}
            </div>
        </div>
    );
};

export default LoginLogOut;