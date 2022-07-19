import React from 'react';
import style from './Navigation.module.scss'
import {NavLink} from 'react-router-dom';

export const Navigation = () => {
    return (
        <div>
            <NavLink to={'/profile'} className={({isActive}) => (isActive ? style.activeLink : ' ')}>
                profile
            </NavLink>
        </div>
    );
};

