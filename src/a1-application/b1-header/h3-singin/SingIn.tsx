import React from 'react';
import {NavLink} from 'react-router-dom';

export const SingIn = () => {
    return (
        <div>
            <NavLink to={'/login'} >
                sing in
            </NavLink>
        </div>
    );
};

