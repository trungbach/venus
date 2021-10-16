import React, {useState} from 'react';
import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import heroImg1 from '@/public/heroImg1.png'
import heroImg2 from '@/public/heroImg2.png'
import heroImg3 from '@/public/heroImg3.png'

const Banner = ({id}) => {
    
    return (
        <div id={id} className={styles.banner}>
            <div className={styles.bannerContent}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.bannerTitle}>
                        <Image width={107} height={24} src='https://venus.io/images/logo.svg' alt='logo' />
                        <h1>Money Markets</h1>  
                        <h3 className={styles.extraTitle}>
                            A Decentralized Marketplace for Lenders and Borrowers with Borderless Stablecoins.
                        </h3>
                        <Link href="/dashboard">
                            <a className={styles.primaryBtn}>launch app</a>
                        </Link>
                       
                    </div>
                    <div className={styles.bannerImg}>
                        <div className={styles.bannerImg1}>
                            <Image src={heroImg1} alt='hero-img1' />
                        </div>
                        <div className={styles.bannerImg2}>
                            <Image src={heroImg2} alt='hero-img2' />
                        </div>
                        <div className={styles.bannerImg3}>
                            <Image src={heroImg3} alt='hero-img3' />
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export default Banner

