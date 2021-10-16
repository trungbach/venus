import React from 'react';
import styles from './style.module.scss';

const Heading = ({title}) => {
    return (
        <div className={styles.heading}>
            <p>{title}</p>
        </div>
    );
}

export default Heading;
