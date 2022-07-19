import React from 'react';
import style from './Header.module.css'

export const Header = React.memo(() => {
    return (
        <div className={style.header_wrapper}>
            header
        </div>
    );
})

