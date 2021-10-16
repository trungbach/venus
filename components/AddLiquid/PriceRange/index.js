import React from 'react';
import styles from './style.module.scss';

const PriceRange = () => {
    return (
        <div className={styles.priceRange}>
            <h4 className={styles.title}>Set Price Range</h4>
            {/* <div className={styles.liquidity}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
                <p>
                    Your positions will appear here.
                </p>
            </div> */}
            <div className='d-flex justify-content-between mt-3'>
                <div className={`${styles.formItem} me-3`}>
                    <div className={styles.btnAction}>-</div>
                    <div className={styles.value}>
                        <p>Min Price</p>
                        <div>0.0</div>
                        <p>ANT per ETH</p>
                    </div>
                    <div className={styles.btnAction}>+</div>
                </div>
                <div className={styles.formItem}>
                    <div className={styles.btnAction}>-</div>
                    <div className={styles.value}>
                        <p>Max Price</p>
                        <div>0.0</div>
                        <p>ANT per ETH</p>
                    </div>
                    <div className={styles.btnAction}>+</div>
                </div>
            </div>
            <div className={styles.btnAction}>
                Enter an amount
            </div>
        </div>
    );
}

export default PriceRange;
