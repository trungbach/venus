import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import Image from 'next/image'
import ethSwap from '@/public/ethSwap.png';
import { DownOutlined, CheckOutlined } from '@ant-design/icons';

const SelectPair = ({showModal}) => {
    return (
        <div className={styles.selectPair}>
            <div className={styles.pairInner}>
                <h4 className={styles.title}>Select Pair</h4>
                <div className={styles.select}>
                    <div className={styles.asset}>
                        <div className={styles.infoAsset} onClick={showModal}>
                            <div className='d-flex align-items-center'>
                                <Image width={24} height={24} src={ethSwap} alt='coin' />
                                <div className={styles.assetName}>ETH</div>
                            </div>
                            <DownOutlined />
                        </div>
                    </div>
                    <div className={styles.asset}>
                        <div className={styles.selectToken} onClick={showModal}>
                            Select a token
                            <DownOutlined />
                        </div>
                    </div>
                </div>

                <div className={styles.formItem}>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div>
                            <h5>Fee tier</h5>
                            <p>The % you will earn in fees.</p>
                        </div>
                        <div className={styles.btnAction}>Hide</div>
                    </div>
                </div>

                <div className={styles.listFee}>
                    <div className={styles.formItem}>
                        <h5>0.05% fee</h5>
                        <p>Best for stable pairs</p>
                        <div className={styles.active}>
                            <CheckOutlined />
                        </div>
                    </div>
                    <div className={styles.formItem}>
                        <h5>0.3% fee</h5>
                        <p>Best for most pairs</p>
                        <div className={styles.active}>
                            <CheckOutlined />
                        </div>
                    </div>
                    <div className={styles.formItem}>
                        <h5>1% fee</h5>
                        <p>Best for exotic pairs</p>
                        <div className={styles.active}>
                            <CheckOutlined />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectPair;
