import React from 'react';
import styles from './style.module.scss';
import SideBar from '@/components/SideBar';
import Dashboard from '@/components/Dashboard';

const Index = () => {
    return (
        <div className={`${styles.dashboard} ${styles.app}`}>
            <SideBar />
            <Dashboard />
        </div>
    );
}

export default Index;
