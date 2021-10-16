import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import Image from 'next/image'
import ethSwap from '@/public/ethSwap.png';
import { DownOutlined, CheckOutlined } from '@ant-design/icons';
import arrowDown from '@/public/arrowDown.png';

const DepositAmount = ({showModal}) => {
    return (
        <div className={styles.selectPair}>
            <div className={styles.pairInner}>
                <h4 className={styles.title}>Deposit Amounts</h4>
                <div className={styles.formSwap}>
                    <div className='d-flex justify-content-between'>
                        <div className={styles.asset}>
                            <div className={styles.infoAsset} onClick={showModal}>
                                <Image width={24} height={24} src={ethSwap} alt='coin' />
                                <div className={styles.assetName}>ETH</div>
                                <Image src={arrowDown} width={12} height={7} alt='arrow' />
                            </div>
                        </div>
                        
                        <div className={styles.inputValue}>
                            <input  inputMode="decimal" autoComplete="off" autoCorrect="off" 
                                    type="text" pattern="^[0-9]*[.,]?[0-9]*$" 
                                    placeholder="0.0" minLength="1" maxLength="79" 
                                    spellCheck="false" value="" />
                        </div>
                    </div>
                    <div className={styles.balance}>Balance: 0.2092 ETH (Max)</div>
                </div>

                <div className={styles.formSwap}>
                    <div className='d-flex justify-content-between'>
                        <div className={styles.asset}>
                            <div className={styles.selectToken} onClick={showModal}>
                                Select a token
                                <DownOutlined />
                            </div>
                        </div>
                        
                        <div className={styles.inputValue}>
                            <input  inputMode="decimal" autoComplete="off" autoCorrect="off" 
                                    type="text" pattern="^[0-9]*[.,]?[0-9]*$" 
                                    placeholder="0.0" minLength="1" maxLength="79" 
                                    spellCheck="false" value="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DepositAmount;
