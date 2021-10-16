import React from 'react';
import styles from './style.module.scss';
import {Button} from 'antd'
const EmptyItem = ({goToShop}) => {
    return (
        <div className={styles.empty}>
            <h1>You don&apos;t have any ANT</h1>
            <Button className={styles.secondaryBtn} onClick={goToShop}>Shop now</Button>
        </div>
    );
}

export default EmptyItem;
