import React from 'react';
import style from './BodyWithRoutes.module.scss'
import {Route, Routes} from 'react-router-dom';
import {Login} from './main/p1-login/Login';
import {Registration} from './main/p2-registration/Registration';
import {Profile} from './main/p3-profile/Profile';
import {PasswordRecovery} from './main/p4-password-recovery/PasswordRecovery';
import {NewPassword} from './main/p5-new-password/NewPassword';
import {Error404} from './main/p6-error-404/Error-404';

 export const BodyWithRoutes = React.memo(() => {
    return (
        <nav className={style.navigations_wrapper}>
            <Routes>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/password-recovery'} element={<PasswordRecovery/>}/>
                <Route path={'/new-password'} element={<NewPassword/>}/>
                <Route path={'/404'} element={<Error404/>}/>
            </Routes>
        </nav>
    );
})

