import React from 'react'

const UserLogin = () => {
    let a = 0;
    function func(e) {
        e.preventDefault();
    }
    function checkMail(e) {
        if (!e.target.value.includes('.ru')) {
            document.querySelector('#one').style.display = 'block';
        }
        if (e.target.value.includes('.ru')) {
            document.querySelector('#one').style.display = 'none';
            a++;
        }

    }
    function checkPass(e) {
        if (e.target.value.length < 8) {
            document.querySelector('#two').style.display = 'block';
        }
        if (e.target.value.length >= 8) {
            document.querySelector('#two').style.display = 'none';
            a++;
        }
    }
    function button() {
        if (a > 2) {
            a = 1;
            document.querySelector('.a').value = ""
            document.querySelector('.b').value = ""
        }
    }


    return (
        <div className='frm'>
            <form onClick={(e) => func(e)}>
                <label >Email</label>
                <input className='a' onKeyUp={checkMail} type="text" placeholder="Your email.." />
                <p id='one'>warning</p>

                <label >Password</label>
                <input className='b' onKeyUp={checkPass} type="text" placeholder="Your password.." />
                <p id='two'>warning</p>
                <button onClick={button}>Login</button>
            </form >
        </div>
    )
}

export default UserLogin