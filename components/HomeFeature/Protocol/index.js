import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image'
import Link from 'next/link'

const Protocol = () => {
    return (
        <div className={`${styles.protocol} ${styles.info}`} id='protocol'>
            <div className={`container ${styles.infoContainer}`}>
                <div className={styles.infoMedia}>
                    <div className={`${styles.infoAnime} ${styles.active} ${styles.anime}`}>
                        <div className={styles.infoAnimeImg}>
                            <Image width={532} height={329}  alt='img' 
                                   src='https://venus.io/images/protocol-img.png' />
                        </div>
                        <div className={styles.infoAnimeLogos}>
                            <div className={styles.infoAnimeLogo}>
                                <span className={`${styles.svgImg} ${styles.svgBinanceLogo}`}></span>
                            </div>
                            <div className={styles.infoAnimeLogo}>
                                <span className={`${styles.svgImg} ${styles.svgSwipeLogo}`}></span>
                            </div>
                            <div className={styles.infoAnimeLogo}>
                                <span className={`${styles.svgImg} ${styles.svgVaiLogo}`}></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.infoContent}>
                    <div className={styles.infoContentInner}>
                        <div className={styles.subTitle}>Protocol</div>
                        <h2 className={styles.title}>Money Markets built on Binance Smart Chain</h2>
                        <div className={styles.text}>
                            You can now tokenize your assets utilizing the 
                            Binance Smart Chain and receive portable vTokens that 
                            you can freely move around to cold storage, 
                            transfer to other users, and more.
                        </div>
                        <div className={styles.infoBtn}>
                            <Link href='/'>
                                <a className={styles.secondaryBtn}>Read the Whitepaper</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Protocol;
