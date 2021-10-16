import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image'
import ethSwap from '@/public/ethSwap.png';
import manageToken from '@/public/manageToken.png';
import { Input, Tooltip } from 'antd';
const ModalToken = () => {

    const textTooltip = 'These tokens are commonly paired with other tokens.'
    return (
        <div className={styles.modalToken}>
            <div className={styles.inputToken}>
                <Input placeholder='Search name or paste address'  />
            </div>
            <div className={styles.commonBases}>
                <div className={styles.title}>
                    <span>Common bases </span>
                    <Tooltip placement="right" title={textTooltip}>
                        <div className={styles.tooltip}>?</div>
                    </Tooltip>
                </div>
                <div className={styles.listCommon}>
                    <div>
                        <Image width={24} height={24} src={ethSwap} alt='coin' />
                        <div className={styles.assetName}>ETH</div>
                    </div>
                    <div>
                        <Image width={24} height={24} src={ethSwap} alt='coin' />
                        <div className={styles.assetName}>WETH</div>
                    </div>
                </div>
            </div>
            <div className={styles.listToken}>
                <div className={styles.token}>
                    <div className={styles.tokenName}>
                        <Image width={24} height={24} src={ethSwap} alt='coin' />
                        <div>
                            <div className={styles.name}>ETH</div>
                            <div className={styles.extraName}>Ether</div>
                        </div>
                    </div>
                    <div className={styles.tokenValue}>
                        0.2092
                    </div>
                </div>
                <div className={styles.token}>
                    <div className={styles.tokenName}>
                        <Image width={24} height={24} src={ethSwap} alt='coin' />
                        <div>
                            <div className={styles.name}>ETH</div>
                            <div className={styles.extraName}>Ether</div>
                        </div>
                    </div>
                    <div className={styles.tokenValue}>
                        0.2092
                    </div>
                </div>
                <div className={styles.token}>
                    <div className={styles.tokenName}>
                        <Image width={24} height={24} src={ethSwap} alt='coin' />
                        <div>
                            <div className={styles.name}>ETH</div>
                            <div className={styles.extraName}>Ether</div>
                        </div>
                    </div>
                    <div className={styles.tokenValue}>
                        0.2092
                    </div>
                </div>
                <div className={styles.token}>
                    <div className={styles.tokenName}>
                        <Image width={24} height={24} src={ethSwap} alt='coin' />
                        <div>
                            <div className={styles.name}>ETH</div>
                            <div className={styles.extraName}>Ether</div>
                        </div>
                    </div>
                    <div className={styles.tokenValue}>
                        0.2092
                    </div>
                </div>
                <div className={styles.token}>
                    <div className={styles.tokenName}>
                        <Image width={24} height={24} src={ethSwap} alt='coin' />
                        <div>
                            <div className={styles.name}>ETH</div>
                            <div className={styles.extraName}>Ether</div>
                        </div>
                    </div>
                    <div className={styles.tokenValue}>
                        0.2092
                    </div>
                </div>
            </div>
            <div className={styles.manageToken}>
                <Image src={manageToken} alt='manage' width={16} height={16} />
                Manage Token Lists
            </div>
        </div>
    );
}

export default ModalToken;
