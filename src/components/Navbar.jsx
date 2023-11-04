import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear('user');
        navigate('/login');
    }

    return (
        <div className='bg-yellow-500 py-4 shadow-md'>
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="left">
                    <div className="logo font-bold text-2xl text-grey text-center">Send It!</div>
                </div>
                <div className="right">
                    <ul className='flex space-x-4 text-grey justify-center items-center'>
                        <Link to={'/'}>
                            <li className='cursor-pointer'>Home</li>
                        </Link>
                        {user ? (
                            <li onClick={logout} className='cursor-pointer'>Logout</li>
                        ) : (
                            <Link to={'/login'}>
                                <li className='cursor-pointer'>Login</li>
                            </Link>
                        )}
                        {user && (
                            <li className='cursor-pointer'>{user.name}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
