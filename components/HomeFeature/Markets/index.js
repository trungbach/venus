import React from 'react';
import styles from './style.module.scss';
import {Dropdown, Select, Menu} from 'antd'
import SXP from '@/public/SXP.png';
import Image from 'next/image';
import { DownOutlined } from '@ant-design/icons';

const Markets = () => {
    const listBlocks = [
        { 
            name: "SXP",
            imgUrl: SXP
        },
        { 
            name: "SXP",
            imgUrl: SXP
        },
        { 
            name: "SXP",
            imgUrl: SXP
        },
        { 
            name: "SXP",
            imgUrl: SXP
        },
        { 
            name: "SXP",
            imgUrl: SXP
        },
        { 
            name: "SXP",
            imgUrl: SXP
        }
    ]

    const listBlockUI = listBlocks.map((item, index) => {
        return (
            <Menu.Item key={index}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <Image width={35} height={35} src={item.imgUrl} alt={item.name} /> 
                    <span className={styles.dropText}>{item.name}</span>
                </a>
            </Menu.Item>
        )
    })

    const menu = (
        <Menu>
          {listBlockUI}
        </Menu>
    );


    return (
        <div className={styles.markets} id='markets'>
            <div className={styles.titleContainer}>
                <div className={styles.titleText}>Markets</div>
            </div>
            <div className={`container ${styles.marketContainer}`}>
                <div className={styles.header}>
                    <div className={styles.drop}>
                        <Dropdown overlay={menu} trigger={['click']} overlayClassName={styles.overlayClassName}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <Image width={35} height={35} src={SXP} alt='SXP' /> 
                                <span className={styles.dropText}>SXP</span>
                                <span><DownOutlined /></span>
                            </a>
                        </Dropdown>
                    </div>
                    <div className={styles.headerInfo}>
                        <div className={styles.infoProp}>Price</div>
                        <div className={styles.infoValue}>$2.55</div>
                    </div>
                </div>
                <div className={styles.marketInfo}>
                    <div className={styles.infoItems}>
                        <div className={styles.infoItem}>
                            <div className={styles.infoItemProp}>Total Supply</div>
                            <div className={styles.infoItemValue}>$214,487,741.23</div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.infoItemProp}>Number of Suppliers</div>
                            <div className={styles.infoItemValue}>2599</div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.infoItemProp}>Total Borrowed</div>
                            <div className={styles.infoItemValue}>$7,166,897.90</div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.infoItemProp}>Number of Borrowers</div>
                            <div className={styles.infoItemValue}>927</div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.infoItemProp}>Token Address</div>
                            <a href='https://bscscan.com/token/0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0' 
                               target='_blank' rel='noreferrer'
                               className={`${styles.infoItemValue} ${styles.token}`}>0x2ff3...b6d0</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Markets;
