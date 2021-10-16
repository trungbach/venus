import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image'
import mintImg from '@/public/mintImg.png';

const Mint = ({id}) => {
    return (
        <div id={id} className={styles.mint}>
            <div className={`container ${styles.minContainer}`}>
                <div className={styles.mintContent}>
                    <div className={styles.mintLogo}>
                        <Image width={88} height={88} src='https://venus.io/images/mint-logo.svg' alt='mint-logo'  />
                    </div>
                    <div className={styles.mintText}>
                        Venus enables the world&apos;s first decentralized stablecoin, 
                        VAI, built on Binance Smart Chain that is backed by 
                        a basket of stablecoins and crypto assets without 
                        centralized control.
                    </div>
                    <div className={styles.mintBtn}>
                        <a href="https://venus.io/Whitepaper.pdf" className={styles.primaryBtn} target="_blank">Learn More</a>
                    </div>
                </div>
                <div className={styles.mintMedia}>
                    <Image src={mintImg} alt="mint-img" />
                </div>
            </div>
        </div>
    );
}

export default Mint;
