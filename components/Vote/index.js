import React from 'react';
import styles from './style.module.scss';
import Support from '@/components/Support';
import Heading from '@/components/Heading';
import Overview from '@/components/Dashboard/Overview';
import AllMarkets from '@/components/Dashboard/Markets';
import { Progress, Switch, Button  } from 'antd';
import { PlusCircleFilled, ArrowRightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import XVS from '@/public/XVS.png'
const Vote = () => {
    return (
        <div className={styles.wrapper}>
            <Heading title='Vote' />
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <div className={styles.totallyLeft}>
                        <div className={styles.totalValue}>
                            <Image width={25} height={25} src={XVS} alt='xvs-coin' />
                            <p>0.000000000</p>
                        </div>
                        <div className={styles.address}>
                            <p>0x6C...840D</p>
                            <span className={styles.arrowRight}><ArrowRightOutlined /></span>
                        </div>
                    </div>

                    <div className={`${styles.votingWallet} ${styles.totallyLeft}`}>
                        <h3>Voting Wallet</h3>
                        <div className={styles.votingVenus}>
                            <p>Venus Balance</p>
                            <div>
                                <Image src={XVS} alt='coin' width='30' height='30' /> 
                                <div className={styles.value}>0.0000<span>0000</span></div>
                            </div>
                        </div>
                        <div className={styles.votingCollect}>
                            <div className={styles.votingVenus}>
                                <p>Venus Earned</p>
                                <div>
                                    <Image src={XVS} alt='coin' width='30' height='30' /> 
                                    <div className={styles.value}>0.0000<span>0000</span></div>
                                </div>
                            </div>
                            <div className={styles.votingVenus}>
                                <p>VAI Mint Earned</p>
                                <div>
                                    <Image src={XVS} alt='coin' width='30' height='30' /> 
                                    <div className={styles.value}>0.0000<span>0000</span></div>
                                </div>
                            </div>
                            <div className={styles.collect}>Collect</div>
                        </div>

                        <div className={styles.setup}>
                            <h3>Setup Voting</h3>
                            <p>
                                You can either vote on each proposal yourself 
                                or delegate your votes to a third party. Venus 
                                Governance puts you in charge of the future of Venus
                            </p>
                            <div>
                                <Button className={styles.appBtn}>get started</Button>
                            </div>
                        </div>
                    </div>
                   

                </div>

                <div className={styles.rightContent}>
                    <div className={styles.totallyLeft}>
                        <div className={styles.balance}>
                            <div className={styles.label}>supply balance</div>
                            <div className={styles.value}>$0</div>
                        </div>
                        <div>
                            <div className={styles.valueBalance}>
                                <Progress width={150} height={150} 
                                        strokeColor={{
                                            from: '#9dd562',
                                            to: '#9dd562',
                                        }}
                                            type="circle" percent={0} showInfo={false} />
                                <div className={styles.circleLable}>
                                    <p className={styles.percent}>0%</p>
                                    <p className={styles.label}>Net APY</p>
                                </div>
                            </div>
                            <div className={styles.toggle}>
                                <Switch />
                                <div className={styles.desc}>🔥 APY with XVS</div>
                            </div>
                        </div>
                        
                        <div className={styles.balance}>
                            <div className={styles.label}>borrow balance</div>
                            <div className={styles.value}>$0</div>
                        </div>
                    </div>

                    <AllMarkets />
                    
                </div>
            </div>
            <Support />
        </div>
    );
}

export default Vote;
