import React from 'react';
import styles from './styles.module.scss';
import Meta from '../Meta';

const Layout = ({children}) => {
    return (
        <div className={styles.layout}>
            <Meta />
            {children}
        </div>
    );
}

export default Layout;
