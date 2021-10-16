import React from 'react';
import styles from './style.module.scss';
import SideBar from '@/components/SideBar';
import Vote from '@/components/Vote';

const Index = () => {
    return (
        <div className={`${styles.vote} ${styles.app}`}>
            <SideBar />
            <Vote />
        </div>
    );
}

export default Index;
