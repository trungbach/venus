import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link'
import Image from 'next/image';
import SXP from '@/public/SXP.png';

const InfoBlocks = () => {
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
        <div className={styles.infoBlocks}>
            <div id='savings' className={`${styles.info} ${styles.infoSavings}`}>
                <div className={`${styles.infoContainer} container`}>
                    <div className={styles.infoContent}>
                        <div className={styles.infoContentInner}>
                            <div className={styles.subTitle}>Savings</div>
                            <h2 className={styles.title}>Earn interest on your assets</h2>
                            <div className={styles.text}>
                                Funds held within the protocol 
                                can earn APY&apos;s based on the market demand for that asset. 
                                Interest is earned by the block and can be used 
                                as collateral to borrow assets or to mint stablecoins.
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
                            <Image width={140} height={175} alt='saving-img' 
                                   src='https://venus.io/images/savings-img.png'  />
                        </div>
                        <div className={styles.infoItems}>
                            <div className={styles.jsApyList}>
                                {listBlockUI}
                            </div>
                            <div className={styles.infoMore}>
                                <label className={styles.infoMoreBtn}>View More</label>           
                            </div>
                        </div>
                        <div className={styles.infoToggle}>
                            <label className={styles.infoToggleSwitch}>
                                <input type="checkbox"  id='apyWithXVS' checked />
                                <span className={styles.infoToggleSlider}></span>
                            </label>
                            <div className={styles.infoToggleText}>
                                <span className={styles.infoToggleEmoji}>🔥</span>
                                <span className={styles.infoToggleStatus}>with XVS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='protocol' className={`${styles.info} ${styles.infoProtocol}`}></div>
            <div id='borrow' className={`${styles.info} ${styles.infoBorrow}`}></div>
        </div>
    );
}

export default InfoBlocks;
