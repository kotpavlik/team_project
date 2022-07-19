import React from 'react';
import style from './Header.module.scss'
import {Navigation} from './h1-navigation/Navigation';
import {Logotype} from './h2-logotype/Logotype';
import {SingIn} from './h3-singin/SingIn';

export const Header = React.memo(() => {
    return (
        <div className={style.header_wrapper}>
            <Navigation/>
            <Logotype/>
            <SingIn/>
        </div>
    );
})

