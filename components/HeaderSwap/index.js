import React from 'react';
import Image from 'next/image'
import styles from './style.module.scss';
import Link from 'next/link'
import uniLogo from '@/public/uniLogo.png';
import ethSwap from '@/public/ethSwap.png';

const HeaderSwap = ({page}) => {
    return (
        <div className={styles.swapHead}>
            <div className={styles.headMenu}>
                <div className={styles.logo}>
                    <Image width={30} height={30}src={uniLogo} alt='logo' />
                </div>
                <div className={styles.tabs}>
                    <div className={styles.tab}>
                        <Link href='/swap'><a className={page == '/swap' ? styles.active : undefined}>
                            Swap</a>
                        </Link>
                    </div>
                    <div className={styles.tab}>
                        <Link href='/pool'><a className={page == '/pool' ? styles.active : undefined}>
                            Pool</a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.headInfo}>
                <div className={styles.network}>
                    <Image width={20} height={20} src={ethSwap} alt='network' />Ropsten
                </div>
                <div className={styles.balance}>0.209 ETH</div>
                <div className={styles.address}>
                    0x6Cd7...840D
                    <svg width="16px" height="16px"><rect x="0" y="0" width="16" height="16" fill="#01698C" transform="translate(-2.7924921913626806 -1.8637476398981525) rotate(364.7 8 8)"></rect><rect x="0" y="0" width="16" height="16" fill="#1566F2" transform="translate(-9.040944927478794 3.8253310597083647) rotate(278.6 8 8)"></rect><rect x="0" y="0" width="16" height="16" fill="#FC192D" transform="translate(11.58197562517531 -7.70882504242568) rotate(373.0 8 8)"></rect></svg>
                </div>
            </div>
        </div>
    );
}

export default HeaderSwap;
