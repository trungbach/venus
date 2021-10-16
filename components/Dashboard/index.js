import React from 'react';
import styles from './style.module.scss';
import Support from '@/components/Support';
import Heading from '@/components/Heading';
import Overview from '@/components/Dashboard/Overview';
import AllMarkets from '@/components/Dashboard/Markets';
import { Progress, Switch  } from 'antd';
import { PlusCircleFilled, ArrowRightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import XVS from '@/public/XVS.png'
const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <Heading title='Dashboard' />
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <div className={styles.totallyLeft}>
                        <div className={styles.totalValue}>
                            <Image width={25} height={25} src={XVS} alt='xvs-coin' />
                            <p>0 XVS</p>
                            <span><PlusCircleFilled /> </span>
                        </div>
                        <div className={styles.address}>
                            <p>0x6C...840D</p>
                            <span className={styles.arrowRight}><ArrowRightOutlined /></span>
                        </div>
                    </div>

                    <div className={styles.totallyLeft}>
                        <div className={styles.totalValue}>
                            <Image width={25} height={25} src={XVS} alt='xvs-coin' />
                            <p>0 VAI</p>
                            <span><PlusCircleFilled /> </span>
                            <p className={styles.totalAPY}>APY: 2.56%</p>
                        </div>
                        <div className={styles.address}>
                            <p>0x6C...840D</p>
                            <span className={styles.arrowRight}><ArrowRightOutlined /></span>
                        </div>
                    </div>

                    <div className={styles.borrowLimit}>
                        <h3>$0</h3>
                        <p>Available Credit</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p>Borrow Limit</p>
                            <div className={styles.total}>0%</div>
                        </div>
                        <div className={styles.percent}>
                            <Progress percent={50} showInfo={false} />
                        </div>
                    </div>
                    <div className={styles.totallyLeft}>
                        <Overview />
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

export default Dashboard;
