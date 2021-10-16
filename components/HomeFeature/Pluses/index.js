import React from 'react';
import styles from './style.module.scss'
import Image from 'next/image'

const Pluses = () => {
    return (
        <div className={styles.pluses}>
             <div className={`container ${styles.plusesContainer}`}>
                 <div className={styles.plusesItems}>
                    <div className={styles.plusesItem}>
                        <div className={styles.head}>
                            <div className={styles.plusesIcon}>
                                <span className={`${styles.svgImg} ${styles.svgImg1}`}></span>
                            </div>
                            <div className={styles.title}>Decentralized</div>
                        </div>
                        <div className={styles.plusesDesc}>
                            Access an immutable money market protocol directly on-chain.
                        </div>
                    </div>
                    <div className={styles.plusesItem}>
                        <div className={styles.head}>
                            <div className={styles.plusesIcon}>
                                <span  className={`${styles.svgImg} ${styles.svgImg2}`}></span>
                            </div>
                            <div className={styles.title}>BEP-2-</div>
                        </div>
                        <div className={styles.plusesDesc}>
                            All Venus Protocol assets are bound by the BEP-20 standard.
                        </div>
                    </div>
                    <div className={styles.plusesItem}>
                        <div className={styles.head}>
                            <div className={styles.plusesIcon}>
                                <span  className={`${styles.svgImg} ${styles.svgImg3}`}></span>
                            </div>
                            <div className={styles.title}>Scalable</div>
                        </div>
                        <div className={styles.plusesDesc}>
                            Built on Binance Smart Chain for fast, secure, and low cost transactions.
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    );
}

export default Pluses;
