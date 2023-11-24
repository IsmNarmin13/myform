import React from 'react'

const UserLogin = () => {
    function func(e) {
        e.preventDefault();
    }
   function checkMail(e) {
    if (e.target.value.includes('.ru')) {
        document.querySelector('#one').style.display='none';
    }
   }
    return (
        <div className='frm'>
            <form onClick={(e)=>func(e)}>
                <label >Email</label>
                <input onKeyUp={checkMail} type="text" placeholder="Your email.." />
                <p id='one'>warning</p>

                <label >Password</label>
                <input minLength={8} type="text" placeholder="Your password.." />
                <p id='two'>warning</p>
                <button>Login</button>
            </form>
        </div>
    )
}

export default UserLogin