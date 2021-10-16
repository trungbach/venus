import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import SXP from '@/public/SXP.png';

const InfoBorrow = () => {

    const listBlocks = [
        {
            imgUrl: SXP,
            title: "Swipe",
            slug: "SXP",
            percent: '0.18%',
            name: 'APY'
        },
        {
            imgUrl: SXP,
            title: "Swipe",
            slug: "SXP",
            percent: '0.18%',
            name: 'APY'
        },
        {
            imgUrl: SXP,
            title: "Swipe",
            slug: "SXP",
            percent: '0.18%',
            name: 'APY'
        }, 
        {
            imgUrl: SXP,
            title: "Swipe",
            slug: "SXP",
            percent: '0.18%',
            name: 'APY'
        },
        {
            imgUrl: SXP,
            title: "Swipe",
            slug: "SXP",
            percent: '0.18%',
            name: 'APY'
        },
        {
            imgUrl: SXP,
            title: "Swipe",
            slug: "SXP",
            percent: '0.18%',
            name: 'APY'
        }
    ]

    const listBlockUI = listBlocks.map((item, index) => {
        return (
            <div key={index} className={styles.infoItem}>
                <span className={styles.icon}>
                    <Image src={item.imgUrl} alt='icon' />
                </span>
                <span className={styles.content}>
                    <span className={styles.head}>
                        <span className={styles.headTitle}>{item.title}</span>
                        <span className={styles.headProp}>{item.slug}</span>
                    </span>
                    <span className={styles.data}>
                        <span className={styles.dataValue}>{item.percent}</span>
                        <span className={styles.dataProp}>{item.name}</span>
                    </span>
                </span>
            </div>
        )
    })

    return (
        <div id='borrow' className={`${styles.infoBorrow} ${styles.info}`}>
            <div className={`${styles.infoContainer} container`}>
                <div className={styles.infoContent}>
                    <div className={styles.infoContentInner}>
                        <div className={styles.subTitle}>Borrow On-Demand</div>
                        <h2 className={styles.title}>Access instant liquidity on Venus</h2>
                        <div className={styles.text}>
                            Use your vToken collateral to borrow from the 
                            Venus Protocol instantly with no trading fees, 
                            no slippage and directly on-chain. 
                            With Venus, you have on-demand liquidity available globally.
                        </div>
                        <div className={styles.infoBtn}>
                            <Link href='/'>
                                <a className={styles.secondaryBtn}>Launch Venus</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.infoMedia}>
                    <div className={styles.mediaImg}>
                        <Image width={210} height={188} alt='borrow-img' 
                                src='https://venus.io/images/borrow-img.png'  />
                    </div>
                    <div className={styles.infoItems}>
                        <div className={styles.jsApyList}>
                            {listBlockUI}
                        </div>
                        <div className={styles.infoMore}>
                            <label className={styles.infoMoreBtn}>View More</label>           
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default InfoBorrow;
