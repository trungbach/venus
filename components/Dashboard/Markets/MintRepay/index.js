import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import SXP from '@/public/SXP.png';
import VAI from '@/public/VAI.svg';
import mintFree from '@/public/mintFree.png';
import { Button } from 'antd';
const MintRepay = () => {
    return (
        <div className={styles.mintRepay}>
            <div className={styles.safeMax}>
                <input inputMode="numeric" placeholder="0" type="text" value="0" />
                <div className={styles.label}>safe max</div>
            </div>
            <div className={styles.confirm}>
                <div className={styles.confirmItem}>
                    <div>
                        <Image src={SXP} alt='coin' width="30" height='30' />
                        <span>Available VAI Limit</span> 
                    </div>
                    <div className={styles.valueVAI}>0 VAI</div>
                </div>
                <div className={styles.confirmItem}>
                    <div>
                        <Image src={mintFree} alt='coin' width="30" height='30' />
                        <span>Mint Free</span> 
                    </div>
                    <div className={styles.valueVAI}>0 VAI (0%)</div>
                </div>
                <div className={styles.cta}>
                    <Button className={styles.btnVAI} disabled>
                        Mint VAI
                    </Button>
                </div>
                <div className={styles.total}>
                    <div>VAI Balance</div>
                    <div>0 VAI</div>
                </div>
            </div>

            <div className={styles.safeMax}>
                <input inputMode="numeric" placeholder="0" type="text" value="0" />
                <div className={styles.label}>max</div>
            </div>
            <div className={styles.confirm}>
                <div className={styles.confirmItem}>
                    <div>
                        <Image src={VAI} alt='coin' width="30" height='30' />
                        <span>Repay VAI Balance</span> 
                    </div>
                    <div className={styles.valueVAI}>0 VAI</div>
                </div>
               
                <div className={styles.cta}>
                    <span className={styles.notEnough}>Your balance is not enough</span>
                    <Button className={styles.btnVAI} disabled>
                        Mint VAI
                    </Button>
                </div>
                <div className={styles.total}>
                    <div>VAI Balance</div>
                    <div>0 VAI</div>
                </div>
            </div>
        </div>
    );
}

export default MintRepay;
